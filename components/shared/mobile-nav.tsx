'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from '@/components/ui/sheet';
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { PanelRight } from 'lucide-react';
import ThemeToggle from './theme-toggle';

const MobileNav = () => {
	const pathname = usePathname();

	return (
		<header className="sticky flex w-full h-14 items-center gap-4 border-b bg-background px-4 lg:static lg:h-auto lg:border-0 lg:bg-transparent lg:px-6 lg:gap-4 lg:py-4 lg:pl-14 lg:hidden">
			<nav className="flex justify-end items-center gap-2 w-full">
				<SignedIn>
					<div className="mr-[auto]">
						<Sheet>
							<SheetTrigger asChild>
								<Button size="icon" variant="outline" className="lg:hidden">
									<PanelRight className="h-5 w-5" />
									<span className="sr-only">Toggle Menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="max-w-[280px] overflow-scroll">
								<SheetHeader>
									<SheetTitle>
										<Link href="/" className="group flex shrink-0 items-center gap-2">
											<Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
											<span className="sr-only">Imaginifiy</span>
										</Link>
									</SheetTitle>
									<SheetDescription className="hidden"></SheetDescription>
								</SheetHeader>

								<ul className="grid gap-6 text-lg font-medium mt-8">
									{navLinks.map((link) => {
										const isActive = link.route === pathname;

										return (
											<li key={link.route}>
												<SheetTrigger asChild>
													<Link className={`${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'} flex items-center text-[16px] gap-4 px-2.5`} href={link.route}>
														<link.Icon className="h-5 w-5" />
														{link.label}
													</Link>
												</SheetTrigger>
											</li>
										);
									})}
								</ul>
							</SheetContent>
						</Sheet>
					</div>
					{/* <Breadcrumb className="hidden md:flex">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="#">Dashboard</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="#">Orders</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Recent Orders</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb> */}
					<ThemeToggle />
					<UserButton />
				</SignedIn>
				<SignedOut>
					<ThemeToggle />
					<Button asChild variant="default" size="sm">
						<Link href="/sign-in">Login</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	);
};

export default MobileNav;
