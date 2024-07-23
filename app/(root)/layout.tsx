import MobileNav from '@/components/shared/mobile-nav';
import Sidebar from '@/components/shared/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
	return (
		<main className="root">
			<Sidebar />
			<MobileNav />

			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>
			<Toaster />
		</main>
	);
};

export default layout;
