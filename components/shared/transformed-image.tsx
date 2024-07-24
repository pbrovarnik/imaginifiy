'use client';

import { dataUrl, debounce, download, getImageSize } from '@/lib/utils';
import { CloudDownload, LoaderCircle } from 'lucide-react';
import { CldImage, getCldImageUrl } from 'next-cloudinary';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

const TransformedImage = ({ image, type, title, transformationConfig, isTransforming, setIsTransforming, hasDownload = false }: TransformedImageProps) => {
	const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		download(
			getCldImageUrl({
				width: image?.width,
				height: image?.height,
				src: image?.publicId,
				...transformationConfig,
			}),
			title
		);
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex-between">
				<h3 className="h3-bold text-foreground">Transformed</h3>

				{hasDownload && (
					<button className="download-btn" onClick={downloadHandler}>
						<CloudDownload className="pb-[6px]" />
					</button>
				)}
			</div>

			{image?.publicId && transformationConfig ? (
				<div className="relative">
					<CldImage
						width={getImageSize(type, image, 'width')}
						height={getImageSize(type, image, 'height')}
						src={image?.publicId}
						alt={image.title}
						sizes={'(max-width: 767px) 100vw, 50vw'}
						placeholder={dataUrl as PlaceholderValue}
						className="transformed-image"
						onLoad={() => {
							setIsTransforming && setIsTransforming(false);
						}}
						onError={() => {
							debounce(() => {
								setIsTransforming && setIsTransforming(false);
							}, 8000)();
						}}
						{...transformationConfig}
					/>

					{isTransforming && (
						<div className="transforming-loader">
							<LoaderCircle />
							<p className="text-white/80">Please wait...</p>
						</div>
					)}
				</div>
			) : (
				<div className="transformed-placeholder">Transformed Image</div>
			)}
		</div>
	);
};

export default TransformedImage;
