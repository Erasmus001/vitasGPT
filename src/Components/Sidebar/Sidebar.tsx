import { FC } from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Sidebar: FC = (): JSX.Element => {
	return (
		<aside className={styles.sidebar}>
			<Header />
			<nav className={styles.nav}>
				<Link to='/'>Dashboard</Link>
				<Link to='/menu'>Menu</Link>
				<Link to='/customers'>Customers</Link>
				<Link to='/accounting'>Accounting</Link>
				<Link to='/reservations'>Reservations</Link>
				<Link to='/orders'>Orders</Link>
			</nav>
			<Footer />
		</aside>
	);
};

export default Sidebar;
