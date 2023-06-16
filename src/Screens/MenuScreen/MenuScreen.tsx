import { MenuData } from '@/Data';
import styles from './MenuScreen.module.css';
import CategoryCard from '@/Components/CategoryCard/CategoryCard';
import { useState } from 'react';
import { menuDataProps, subCategoryProp } from '@/Types';

const MenuScreen = () => {
	const [selectedCategory, setSelectedCategory] = useState<subCategoryProp[]>(
		[]
	);

	return (
		<main className={styles.menuScreen}>
			<div className={styles.menuLists}>
				{MenuData.map((menu) => (
					<CategoryCard menu={menu} key={menu.id} />
				))}
				{MenuData.map((menu) => (
					<CategoryCard menu={menu} key={menu.id} />
				)).reverse()}
			</div>

			<div>
				<SelectedCategory />
			</div>
		</main>
	);
};

export default MenuScreen;

export const SelectedCategory = () => {
	return (
		<div>
			{MenuData.map((category) => (
				<div key={category.title}>{JSON.stringify(category)}</div>
			))}
		</div>
	);
};
