import { navLinks } from '@/constants';
import Link from 'next/link';
import { Collection } from '@/components/shared/collection';
import { getAllImages } from '@/lib/actions/image.actions';
import { ImageIcon, Camera, Sparkles, SlidersHorizontal, ScanQrCode } from 'lucide-react';

const iconMap = {
	ImageIcon,
	Camera,
	Sparkles,
	SlidersHorizontal,
	ScanQrCode,
};

const Home = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const searchQuery = (searchParams?.query as string) || '';
	const images = await getAllImages({ page, searchQuery });

	return (
		<>
			<section className="home">
				<h1 className="home-heading">Unleash Your Creative Vision with Imaginify</h1>
				<ul className="flex-center w-full gap-20">
					{navLinks.slice(1, 5).map((link) => {
						const Icon = iconMap[link.iconName as keyof typeof iconMap];

						return (
							<Link key={link.route} href={link.route} className="flex-center flex-col gap-2">
								<li className="flex-center w-fit rounded-full bg-white p-4">
									<Icon />
								</li>
								<p className="p-14-medium text-center text-white">{link.label}</p>
							</Link>
						);
					})}
				</ul>
			</section>

			<section className="sm:mt-12">
				<Collection hasSearch images={images?.data} totalPages={images?.totalPage} page={page} />
			</section>
		</>
	);
};

export default Home;
