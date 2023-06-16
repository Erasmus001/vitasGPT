import { menuDataProps, menuProp } from '@/Types';
import styles from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ menu }: menuProp) => {
	const { bgColor, numberOfSubItems, title, icon, id } = menu;

	const handleSelectCategory = () => {};

	return (
		<Link
			to={`/menu/:${id}`}
			className={styles.card}
			style={{ background: bgColor }}
			onClick={handleSelectCategory}
		>
			<div className={styles.icon}>{icon ? icon : 'null'}</div>
			<div className={styles.details}>
				<h4 className={styles.title}>{title}</h4>
				<p
					className={styles.length}
					style={{ color: bgColor !== '#fff' ? '#4248488F' : 'black' }}
				>
					{numberOfSubItems}
				</p>
			</div>
		</Link>
	);
};

export default CategoryCard;
