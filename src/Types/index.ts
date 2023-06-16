export type LogoProps = {
	logo: string;
	altName: string;
	height?: number | string;
	width?: number | string;
};

// Dummy Data
export type favThreadsProps = {
	readonly id: string;
	threadTitle: string;
	threadDesc: string;
	timeStamp: string | number;
};

export type AuthInputsType = {
	email: string;
	password: string;
};

// Auth Screens Props..
export type AuthScreenProps = {
	type?: 'Signup' | 'Signin';
	callback?: () => void;
};

export type AuthContextProp = {
	children: React.ReactNode;
};

export type UserAuthInput = {
	email: string;
	password: string;
};

// * Menu data type

export type subCategoryProp = {
	title: string;
	numberOfSubItems: number;
	bgColor: string;
};


export type menuDataProps = {
	readonly id: number;
	icon?: React.ReactElement;
	title: string;
	numberOfSubItems: number;
	bgColor: string;
	subCategory: subCategoryProp[]
};

export type menuProp = {
	menu: menuDataProps;
};


