import styles from './Searchbox.module.css';
import { Input } from 'antd';

const Searchbox = () => {
	return (
		<div className={styles.searchBox}>
			<input
				type='search'
				name='search thread'
				className={styles.input}
				placeholder='Search your thread'
        maxLength={25}
			/>
		</div>
	);
};

export default Searchbox;
