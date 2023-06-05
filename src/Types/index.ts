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

export type Chat = {
	readonly id: number | string;
	content: string;
	createdAt: string;
	role: 'User' | 'ChatGPT';
	avatar: 'gpt' | 'user';
};

export type chat = {
	chat: Chat;
};
