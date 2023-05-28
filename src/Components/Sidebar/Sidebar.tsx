import { useAuth } from '@/Context/AuthContext';
import styles from './Sidebar.module.css';
import SidebarLogo from '@/UI/SidebarLogo/SidebarLogo';

const Sidebar: React.FC = () => {
	const { Signout } = useAuth();
	return (
		<aside className={styles.sidebar}>
			<SidebarLogo />

			<div className={styles.logout}>
				<button onClick={Signout}>Sign out</button>
			</div>
		</aside>
	);
};

export default Sidebar;
