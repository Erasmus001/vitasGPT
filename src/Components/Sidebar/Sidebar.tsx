import styles from './Sidebar.module.css';
import SidebarLogo from '@/UI/SidebarLogo/SidebarLogo';

const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<SidebarLogo />
		</aside>
	);
};

export default Sidebar;
