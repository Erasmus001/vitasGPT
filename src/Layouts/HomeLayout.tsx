import Sidebar from '@/Components/Sidebar/Sidebar';
import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './HomeLayout.module.css';

type HomeLayoutProps = {};

const HomeLayout: FC = ({}: HomeLayoutProps): JSX.Element => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<Outlet />
		</main>
	);
};

export default HomeLayout;
