'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { transformationTypes } from '@/constants';
import { IImage } from '@/lib/database/models/image.model';
import { formUrlQuery } from '@/lib/utils';
import { ImageIcon, Camera, Sparkles, ScanQrCode, SlidersHorizontal } from 'lucide-react';

import { Button } from '../ui/button';

import { Search } from './search';

interface IImageWithId extends IImage {
	_id: string;
}

export const Collection = ({ hasSearch = false, images, totalPages = 1, page }: { images: IImageWithId[]; totalPages?: number; page: number; hasSearch?: boolean }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	// PAGINATION HANDLER
	const onPageChange = (action: string) => {
		const pageValue = action === 'next' ? Number(page) + 1 : Number(page) - 1;

		const newUrl = formUrlQuery({
			searchParams: searchParams.toString(),
			key: 'page',
			value: pageValue,
		});

		router.push(newUrl, { scroll: false });
	};

	return (
		<>
			<div className="collection-heading">
				<h2 className="h2-bold text-foreground">Recent Edits</h2>
				{hasSearch && <Search />}
			</div>

			{images.length > 0 ? (
				<ul className="collection-list">
					{images.map((image) => (
						<Card image={image} key={image._id} />
					))}
				</ul>
			) : (
				<div className="collection-empty">
					<p className="p-20-semibold">Empty List</p>
				</div>
			)}

			{totalPages > 1 && (
				<Pagination className="mt-10">
					<PaginationContent className="flex w-full">
						<Button disabled={Number(page) <= 1} variant="link" onClick={() => onPageChange('prev')}>
							<PaginationPrevious className="hover:bg-transparent" />
						</Button>

						<p className="flex-center p-16-medium w-fit flex-1">
							{page} / {totalPages}
						</p>

						<Button variant="link" className="w-32" onClick={() => onPageChange('next')} disabled={Number(page) >= totalPages}>
							<PaginationNext className="hover:bg-transparent" />
						</Button>
					</PaginationContent>
				</Pagination>
			)}
		</>
	);
};

const iconMap = {
	ImageIcon,
	Camera,
	Sparkles,
	SlidersHorizontal,
	ScanQrCode,
};

const Card = ({ image }: { image: IImageWithId }) => {
	const iconName = transformationTypes[image.transformationType as TransformationTypeKey].iconName;
	const Icon = iconMap[iconName as keyof typeof iconMap];

	return (
		<li>
			<Link href={`/transformations/${image._id}`} className="collection-card">
				<CldImage
					src={image.publicId}
					alt={image.title}
					width={image.width}
					height={image.height}
					{...image.config}
					loading="lazy"
					className="h-52 w-full rounded-[10px] object-cover"
					sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
				/>
				<div className="flex-between">
					<p className="p-20-semibold mr-3 line-clamp-1 text-foreground">{image.title}</p>
					<Icon />
				</div>
			</Link>
		</li>
	);
};
