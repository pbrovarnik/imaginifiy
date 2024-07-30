'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import ThemeToggle from './theme-toggle';
import { Home, ImageIcon, Sparkles, ScanQrCode, SlidersHorizontal, Camera, User, Landmark } from 'lucide-react';

const iconMap = {
	Home,
	ImageIcon,
	Sparkles,
	ScanQrCode,
	SlidersHorizontal,
	Camera,
	User,
	Landmark,
};

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className="fixed h-full hidden w-72 flex-col border-r bg-background lg:flex">
			<nav className="h-full flex flex-col items-start gap-4 px-2 sm:py-4 overflow-scroll">
				<div className="group flex mx-2 sm:my-2 shrink-0 items-center justify-center gap-2">
					<Link href="/">
						<Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
						<span className="sr-only">Imaginifiy</span>
					</Link>
					<ThemeToggle align="end" side="right" />
				</div>

				<SignedIn>
					<ul className="flex flex-col items-start gap-3 px-2 sm:py-4 w-full">
						{navLinks.slice(0, 6).map((link) => {
							const isActive = link.route === pathname;
							const Icon = iconMap[link.iconName as keyof typeof iconMap];

							return (
								<li key={link.route} className="w-full">
									<Link
										href={link.route}
										className={`${
											isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
										} group w-full px-3 py-2 flex justify-start items-center gap-2 rounded-lg transition-colors hover:text-foreground`}>
										<Icon className="h-5 w-5" />
										<span className="font-medium">{link.label}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					<ul className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
						{navLinks.slice(6).map((link) => {
							const isActive = link.route === pathname;
							const Icon = iconMap[link.iconName as keyof typeof iconMap];
							return (
								<li key={link.route} className="w-full">
									<Link
										href={link.route}
										className={`${
											isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
										} group w-full px-3 py-2 flex justify-start items-center gap-2 rounded-lg transition-colors hover:text-foreground`}>
										<Icon className="h-5 w-5" />
										<span className="font-medium">{link.label}</span>
									</Link>
								</li>
							);
						})}
						<li className="w-full">
							<div className="flex items-center pl-[9px] pr-3 py-2">
								<UserButton showName />
							</div>
						</li>
					</ul>
				</SignedIn>
				<SignedOut>
					<div className="mt-auto mb-2 w-full px-2">
						<Button asChild variant="default" size="sm" className="w-full">
							<Link href="/sign-in">Login</Link>
						</Button>
					</div>
				</SignedOut>
			</nav>
		</aside>
	);
};

export default Sidebar;
