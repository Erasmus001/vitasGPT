import { FC } from 'react';
import styles from './Header.module.css';

type Props = {};

const Header: FC = (props: Props): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.title}>
				Vitas <span className={styles.span}>POS</span>
			</div>
		</header>
	);
};

export default Header;
