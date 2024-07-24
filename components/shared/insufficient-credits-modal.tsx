'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

export const InsufficientCreditsModal = () => {
	const router = useRouter();

	return (
		<AlertDialog defaultOpen>
			<AlertDialogContent>
				<AlertDialogHeader>
					<div className="flex-between">
						<p className="p-16-semibold text-muted-foreground">Insufficient Credits</p>
						<AlertDialogCancel className="border-0 p-0 hover:bg-transparent" onClick={() => router.push('/profile')}>
							<X className="cursor-pointer" />
						</AlertDialogCancel>
					</div>

					<Image src="/assets/images/stacked-coins.png" alt="credit coins" width={462} height={122} />

					<AlertDialogTitle className="p-24-bold text-foreground">Oops.... Looks like you&#39;ve run out of free credits!</AlertDialogTitle>

					<AlertDialogDescription className="p-16-regular py-3">No worries, though - you can keep enjoying our services by grabbing more credits.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<Button className="w-full" variant="secondary" onClick={() => router.push('/profile')}>
						No, Cancel
					</Button>
					<Button className="w-full" variant="default" onClick={() => router.push('/credits')}>
						Yes, Proceed
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
