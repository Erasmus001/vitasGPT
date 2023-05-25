import { favThreadsProps } from '@/Types';

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
