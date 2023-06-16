import Searchbar from '../Searchbar/Searchbar';
import styles from './PageHeader.module.css';

const PageHeader = () => {
	return (
		<header className={styles.pageSearchHeader}>
			<Searchbar />
		</header>
	);
};

export default PageHeader;
