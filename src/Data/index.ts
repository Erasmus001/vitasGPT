import { Chat, favThreadsProps } from '@/Types';

const convertTime = (time: string) => {
	return new Date(time).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

export const dummyFavThreads: favThreadsProps[] = [
	{
		id: '5544abkFchso55xzFDzx464sdf',
		threadTitle: 'Thread Title',
		threadDesc: 'Thread Description',
		timeStamp: convertTime('2022-03-24T17:12:40+00:00'),
	},
	{
		id: '6044abkFchso55xzFDzx464sds',
		threadTitle: 'Thread Title',
		threadDesc: 'Thread Description',
		timeStamp: convertTime('2022-03-24T17:12:40+00:00'),
	},
	{
		id: '2044abkFchso55xzFDzx464sdy',
		threadTitle: 'Thread Title',
		threadDesc: 'Thread Description',
		timeStamp: convertTime('2022-03-24T17:12:40+00:00'),
	},
	{
		id: '9544abkFchso55xzFDzx464sda',
		threadTitle: 'Thread Title',
		threadDesc: 'Thread Description',
		timeStamp: convertTime('2022-03-24T17:12:40+00:00'),
	},
];

export const chatHistory: Chat[] = [
	{
		id: 445124554,
		content: 'How to make an api request to openai?',
		avatar: 'user',
		role: 'User',
		createdAt: 'Monday, 5 June 2023',
	},
	{
		id: 445124448454,
		content:
			'You can paste the command below into your terminal to run your first API request. Make sure to replace $OPENAI_API_KEY with your secret API key.',
		avatar: 'gpt',
		role: 'ChatGPT',
		createdAt: 'Monday, 5 June 2023',
	},
	{
		id: 9865124554,
		content: 'What is JavaScript?',
		avatar: 'user',
		role: 'User',
		createdAt: 'Monday, 5 June 2023',
	},
	{
		id: 425110054,
		content: 'JavaScript is a programming language used mostly for the web.',
		avatar: 'gpt',
		role: 'ChatGPT',
		createdAt: 'Monday, 5 June 2023',
	},
	{
		id: 99625110054,
		content:
			'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.',
		avatar: 'gpt',
		role: 'ChatGPT',
		createdAt: 'Monday, 5 June 2023',
	},
	{
		id: 99628410054,
		content: 'JavaScript is a programming language used mostly for the web.',
		avatar: 'gpt',
		role: 'ChatGPT',
		createdAt: 'Monday, 5 June 2023',
	},
	{
		id: 996259560054,
		content: 'JavaScript is a programming language used mostly for the web.',
		avatar: 'gpt',
		role: 'ChatGPT',
		createdAt: 'Monday, 5 June 2023',
	},
];
