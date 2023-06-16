import { menuDataProps } from '@/Types';
// import { Localbase } from 'localbase';

const convertTime = (time: string) => {
	return new Date(time).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

export const MenuData: menuDataProps[] = [
	{
		id: 1,
		title: 'Breakfast',
		bgColor: '#cfdddb',
		numberOfSubItems: 13,
		subCategory: [
			{
				bgColor: '',
				title: '',
				numberOfSubItems: 4,
			},
		],
	},
	{
		id: 2,
		title: 'Soups',
		bgColor: '#e4cdee',
		numberOfSubItems: 8,
		subCategory: [
			{
				bgColor: '',
				title: '',
				numberOfSubItems: 4,
			},
		],
	},
	{
		id: 3,
		title: 'Pasta',
		bgColor: '#c2dbe9',
		numberOfSubItems: 10,
		subCategory: [
			{
				bgColor: '',
				title: '',
				numberOfSubItems: 4,
			},
		],
	},
	{
		id: 4,
		title: 'Sushi',
		bgColor: '#c9caee',
		numberOfSubItems: 15,
		subCategory: [
			{
				bgColor: '',
				title: '',
				numberOfSubItems: 4,
			},
		],
	},
	{
		id: 5,
		title: 'Drinks',
		bgColor: '#f0c8cf',
		numberOfSubItems: 11,
		subCategory: [
			{
				bgColor: '',
				title: '',
				numberOfSubItems: 4,
			},
		],
	},
	{
		id: 6,
		title: 'Alcohol',
		bgColor: '#c3e9de',
		numberOfSubItems: 12,
		subCategory: [
			{
				bgColor: '',
				title: '',
				numberOfSubItems: 4,
			},
		],
	},
];

// export const db = new Localbase('db');
