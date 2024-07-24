import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/shared/header';
import TransformedImage from '@/components/shared/transformed-image';
import { Button } from '@/components/ui/button';
import { getImageSize } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import DeleteConfirmation from '@/components/shared/delete-confirmation';
import { getImageById } from '@/lib/actions/image.actions';

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
	const { userId } = auth();

	const imageById = await getImageById(id);

	return (
		<>
			<Header title={imageById.title} />
			<section className="mt-5 flex flex-wrap gap-4">
				<div className="p-14-medium md:p-16-medium flex gap-2">
					<p className="text-foreground">Transformation:</p>
					<p className=" capitalize text-purple-400">{imageById.transformationType}</p>
				</div>

				{imageById.prompt && (
					<>
						<p className="hidden text-muted-foreground/40 md:block">&#x25CF;</p>
						<div className="p-14-medium md:p-16-medium flex gap-2 ">
							<p className="text-foreground">Prompt:</p>
							<p className=" capitalize text-purple-400">{imageById.prompt}</p>
						</div>
					</>
				)}

				{imageById.color && (
					<>
						<p className="hidden text-muted-foreground/40 md:block">&#x25CF;</p>
						<div className="p-14-medium md:p-16-medium flex gap-2">
							<p className="text-foreground">Color:</p>
							<p className=" capitalize text-purple-400">{imageById.color}</p>
						</div>
					</>
				)}

				{imageById.aspectRatio && (
					<>
						<p className="hidden text-muted-foreground/40 md:block">&#x25CF;</p>
						<div className="p-14-medium md:p-16-medium flex gap-2">
							<p className="text-foreground">Aspect Ratio:</p>
							<p className=" capitalize text-purple-400">{imageById.aspectRatio}</p>
						</div>
					</>
				)}
			</section>

			<section className="mt-10 border-t border-dark-400/15">
				<div className="transformation-grid">
					{/* MEDIA UPLOADER */}
					<div className="flex flex-col gap-4">
						<h3 className="h3-bold text-foreground">Original</h3>

						<Image
							width={getImageSize(imageById.transformationType, imageById, 'width')}
							height={getImageSize(imageById.transformationType, imageById, 'height')}
							src={imageById.secureURL}
							alt="image"
							className="transformation-original_image"
						/>
					</div>

					{/* TRANSFORMED IMAGE */}
					<TransformedImage image={imageById} type={imageById.transformationType} title={imageById.title} isTransforming={false} transformationConfig={imageById.config} hasDownload={true} />
				</div>

				{userId === imageById.author.clerkId && (
					<div className="mt-4 space-y-4">
						<Button asChild type="button" variant="secondary" className="capitalize w-full">
							<Link href={`/transformations/${imageById._id}/update`}>Update Image</Link>
						</Button>

						<DeleteConfirmation imageId={imageById._id} />
					</div>
				)}
			</section>
		</>
	);
};

export default ImageDetails;
