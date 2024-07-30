export const navLinks: NavLinkType[] = [
	{
		label: 'Home',
		route: '/',
		iconName: 'Home',
	},
	{
		label: 'Image Restore',
		route: '/transformations/add/restore',
		iconName: 'ImageIcon',
	},
	{
		label: 'Generative Fill',
		route: '/transformations/add/fill',
		iconName: 'Sparkles',
	},
	{
		label: 'Object Remove',
		route: '/transformations/add/remove',
		iconName: 'ScanQrCode',
	},
	{
		label: 'Object Recolor',
		route: '/transformations/add/recolor',
		iconName: 'SlidersHorizontal',
	},
	{
		label: 'Background Remove',
		route: '/transformations/add/remove-background',
		iconName: 'Camera',
	},
	{
		label: 'Profile',
		route: '/profile',
		iconName: 'User',
	},
	{
		label: 'Buy Credits',
		route: '/credits',
		iconName: 'Landmark',
	},
];

export const plans: PlansType[] = [
	{
		_id: 1,
		name: 'Free',
		price: 0,
		credits: 20,
		inclusions: [
			{
				label: '20 Free Credits',
				isIncluded: true,
			},
			{
				label: 'Basic Access to Services',
				isIncluded: true,
			},
			{
				label: 'Priority Customer Support',
				isIncluded: false,
			},
			{
				label: 'Priority Updates',
				isIncluded: false,
			},
		],
	},
	{
		_id: 2,
		name: 'Pro Package',
		price: 40,
		credits: 120,
		inclusions: [
			{
				label: '120 Credits',
				isIncluded: true,
			},
			{
				label: 'Full Access to Services',
				isIncluded: true,
			},
			{
				label: 'Priority Customer Support',
				isIncluded: true,
			},
			{
				label: 'Priority Updates',
				isIncluded: false,
			},
		],
	},
	{
		_id: 3,
		name: 'Premium Package',
		price: 199,
		credits: 2000,
		inclusions: [
			{
				label: '2000 Credits',
				isIncluded: true,
			},
			{
				label: 'Full Access to Services',
				isIncluded: true,
			},
			{
				label: 'Priority Customer Support',
				isIncluded: true,
			},
			{
				label: 'Priority Updates',
				isIncluded: true,
			},
		],
	},
];

export const transformationTypes: TransformationType = {
	restore: {
		type: 'restore',
		title: 'Restore Image',
		subtitle: 'Refine images by removing noise and imperfections',
		config: { restore: true },
		iconName: 'ImageIcon',
	},
	removeBackground: {
		type: 'removeBackground',
		title: 'Background Remove',
		subtitle: 'Removes the background of the image using AI',
		config: { removeBackground: true },
		iconName: 'Camera',
	},
	fill: {
		type: 'fill',
		title: 'Generative Fill',
		subtitle: "Enhance an image's dimensions using AI outpainting",
		config: { fillBackground: true },
		iconName: 'Sparkles',
	},
	remove: {
		type: 'remove',
		title: 'Object Remove',
		subtitle: 'Identify and eliminate objects from images',
		config: {
			remove: { prompt: '', removeShadow: true, multiple: true },
		},
		iconName: 'ScanQrCode',
	},
	recolor: {
		type: 'recolor',
		title: 'Object Recolor',
		subtitle: 'Identify and recolor objects from the image',
		config: {
			recolor: { prompt: '', to: '', multiple: true },
		},
		iconName: 'SlidersHorizontal',
	},
};

export const aspectRatioOptions: AspectRationType = {
	'1:1': {
		aspectRatio: '1:1',
		label: 'Square (1:1)',
		width: 1000,
		height: 1000,
	},
	'3:4': {
		aspectRatio: '3:4',
		label: 'Standard Portrait (3:4)',
		width: 1000,
		height: 1334,
	},
	'9:16': {
		aspectRatio: '9:16',
		label: 'Phone Portrait (9:16)',
		width: 1000,
		height: 1778,
	},
};

export const defaultValues = {
	title: '',
	aspectRatio: '',
	color: '',
	prompt: '',
	publicId: '',
};

export const creditFee = -1;
