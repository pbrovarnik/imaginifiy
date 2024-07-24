import MobileNav from '@/components/shared/mobile-nav';
import Sidebar from '@/components/shared/sidebar';
import Toaster from '@/components/ui/toaster';

const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="root">
			<Sidebar />
			<MobileNav />
			<div className="root-container">
				<main className="wrapper">{children}</main>
			</div>
			<Toaster />
		</div>
	);
};

export default Layout;
