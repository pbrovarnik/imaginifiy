import Header from '@/components/shared/header';
import TransformationForm from '@/components/shared/transformation-form';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = { params: { type: string } };

const AddTransformationType = async ({ params: { type } }: Props) => {
	if (type.includes('-')) type = type.replace(/-./g, (m) => m.toUpperCase()[1]);

	const { userId } = auth();
	const { title, subtitle, type: transformationType } = transformationTypes[type];

	if (!userId) redirect('/sign-in');

	const user = await getUserById(userId);

	return (
		<>
			<Header title={title} subtitle={subtitle} />

			<section className="mt-10">
				<TransformationForm action="Add" userId={user._id} type={transformationType} creditBalance={user.creditBalance} />
			</section>
		</>
	);
};

export default AddTransformationType;
