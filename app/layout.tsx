import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/shared/theme-provider';

import './globals.css';

const IBMPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-ibm-plex' });

export const metadata: Metadata = {
	title: 'Imaginify',
	description: 'AI-powered image generator',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider afterSignOutUrl="/" appearance={{ variables: { colorPrimary: '#624cf5' } }}>
			<html lang="en">
				<body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
