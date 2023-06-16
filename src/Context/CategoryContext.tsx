import { menuDataProps } from '@/Types';
import React, {
	createContext,
	useContext,
	useState,
	SetStateAction,
} from 'react';

type Prop = {
	children: React.ReactNode;
};

const CategoryContext = createContext({});

export const useCategoryContext = () => useContext(CategoryContext);

const CategoryContextProvider = ({ children }: Prop) => {
	const [selectedCategory, setSelectedCategory] =
		useState<menuDataProps | null>(null);

	const globVal = {
		selectedCategory,
		setSelectedCategory,
	};
	return (
		<CategoryContext.Provider value={globVal}>
			{children}
		</CategoryContext.Provider>
	);
};

export default CategoryContextProvider;
