/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
	clerkId: string;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	photo: string;
};

declare type UpdateUserParams = {
	firstName: string;
	lastName: string;
	username: string;
	photo: string;
};

// ====== IMAGE PARAMS
declare type AddImageParams = {
	image: {
		title: string;
		publicId: string;
		transformationType: string;
		width: number;
		height: number;
		config: any;
		secureURL: string;
		transformationURL: string;
		aspectRatio: string | undefined;
		prompt: string | undefined;
		color: string | undefined;
	};
	userId: string;
	path: string;
};

declare type UpdateImageParams = {
	image: {
		_id: string;
		title: string;
		publicId: string;
		transformationType: string;
		width: number;
		height: number;
		config: any;
		secureURL: string;
		transformationURL: string;
		aspectRatio: string | undefined;
		prompt: string | undefined;
		color: string | undefined;
	};
	userId: string;
	path: string;
};

declare type Transformations = {
	restore?: boolean;
	fillBackground?: boolean;
	remove?: {
		prompt: string;
		removeShadow?: boolean;
		multiple?: boolean;
	};
	recolor?: {
		prompt?: string;
		to: string;
		multiple?: boolean;
	};
	removeBackground?: boolean;
};

// ====== TRANSACTION PARAMS
declare type CheckoutTransactionParams = {
	plan: string;
	credits: number;
	amount: number;
	buyerId: string;
};

declare type CreateTransactionParams = {
	stripeId: string;
	amount: number;
	credits: number;
	plan: string;
	buyerId: string;
	createdAt: Date;
};

declare type TransformationTypeKey = 'restore' | 'fill' | 'remove' | 'recolor' | 'removeBackground';

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
	searchParams: string;
	key: string;
	value: string | number | null;
};

declare type UrlQueryParams = {
	params: string;
	key: string;
	value: string | null;
};

declare type RemoveUrlQueryParams = {
	searchParams: string;
	keysToRemove: string[];
};

declare type SearchParamProps = {
	params: { id: string; type: TransformationTypeKey };
	searchParams: { [key: string]: string | string[] | undefined };
};

declare type TransformationFormProps = {
	action: 'Add' | 'Update';
	userId: string;
	type: TransformationTypeKey;
	creditBalance: number;
	data?: IImage | null;
	config?: Transformations | null;
};

declare type TransformedImageProps = {
	image: any;
	type: string;
	title: string;
	transformationConfig: Transformations | null;
	isTransforming: boolean;
	hasDownload?: boolean;
	setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
};

// ====== CONSTANT TYPES
declare type NavLinkType = {
	label: string;
	route: string;
	Icon: import('lucide-react').LucideIcon;
};

declare type PlansType = {
	_id: number;
	name: string;
	Icon: import('lucide-react').LucideIcon;
	price: number;
	credits: number;
	inclusions: {
		label: string;
		isIncluded: boolean;
	}[];
};

declare type TransformationType = {
	[key: string]: {
		type: TransformationTypeKey;
		title: string;
		subtitle: string;
		config: {
			fillBackground?: boolean;
			removeBackground?: boolean;
			restore?: boolean;
			recolor?: { prompt: string; to: string; multiple: boolean };
			remove?: { prompt: string; removeShadow: boolean; multiple: boolean };
		};
		Icon: import('lucide-react').LucideIcon;
	};
};

declare type AspectRationType = {
	[key: string]: {
		aspectRatio: string;
		label: string;
		width: number;
		height: number;
	};
};
