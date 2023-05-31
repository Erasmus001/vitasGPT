import { useAuth } from '@/Context/AuthContext';
import styles from './Sidebar.module.css';
import SidebarLogo from '@/UI/SidebarLogo/SidebarLogo';
import { AiOutlinePoweroff, AiOutlineSetting } from 'react-icons/ai';
import { useShowModal } from '@/Hooks/useShowModal';

const Sidebar: React.FC = () => {
	const { Signout } = useAuth();
	const { showModal } = useShowModal();

	return (
		<aside className={styles.sidebar}>
			<SidebarLogo />

			<div className={styles.logout}>
				<button onClick={showModal} title='Settings'>
					<AiOutlineSetting size={20} />
				</button>
				<button onClick={Signout} title='Signout'>
					<AiOutlinePoweroff size={20} />
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
