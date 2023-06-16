import Sidebar from '@/Components/Sidebar/Sidebar';
import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './HomeLayout.module.css';
import PageHeader from '@/Components/PageHeader/PageHeader';

const HomeLayout: FC = (): JSX.Element => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<main className={styles.content}>
				<PageHeader />
				<Outlet />
			</main>
		</main>
	);
};

export default HomeLayout;
