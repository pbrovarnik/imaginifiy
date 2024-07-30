import { SignedIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import Header from '@/components/shared/header';
import { Button } from '@/components/ui/button';
import { plans } from '@/constants';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.actions';
import Checkout from '@/components/shared/checkout';
import { CircleCheckBig, CircleX } from 'lucide-react';

const Credits = async () => {
	const { userId } = auth();

	if (!userId) redirect('/sign-in');

	const user = await getUserById(userId);

	return (
		<>
			<Header title="Buy Credits" subtitle="Choose a credit package that suits your needs!" />

			<section>
				<ul className="credits-list">
					{plans.map((plan) => (
						<li key={plan.name} className="credits-item">
							<div className="flex-center flex-col gap-2">
								<plan.Icon className="text-amber-400" />
								<p className="p-20-semibold mt-2 text-foreground">{plan.name}</p>
								<p className="h1-semibold text-foreground">${plan.price}</p>
								<p className="p-16-regular">{plan.credits} Credits</p>
							</div>

							{/* Inclusions */}
							<ul className="flex flex-col gap-5 py-9">
								{plan.inclusions.map((inclusion) => (
									<li key={plan.name + inclusion.label} className="flex items-center gap-4">
										{inclusion.isIncluded ? <CircleCheckBig className="text-green-600" /> : <CircleX className="text-red-600" />}
										<p className="p-16-regular">{inclusion.label}</p>
									</li>
								))}
							</ul>

							{plan.name === 'Free' ? (
								<Button variant="outline" className="w-full">
									Free Consumable
								</Button>
							) : (
								<SignedIn>
									<Checkout plan={plan.name} amount={plan.price} credits={plan.credits} buyerId={user._id} />
								</SignedIn>
							)}
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default Credits;
