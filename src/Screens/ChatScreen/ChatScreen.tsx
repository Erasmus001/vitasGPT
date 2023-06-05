import Sidebar from '@/Components/Sidebar/Sidebar';
import styles from './ChatScreen.module.css';
import Sidenav from '@/Components/Sidenav/Sidenav';
import { useHideDefaultMenu } from '@/Hooks/useHideMenu';
import Chat from '@/Components/Chat/Chat';
import { useShowModal } from '@/Hooks/useShowModal';
import Settings from '@/Components/Settings/Settings';

const ChatScreen = () => {
	// const { hideMainMenu } = useHideDefaultMenu();
	// hideMainMenu();

	// const { isModalShowing } = useShowModal();

	return (
		<main className={styles.chatScreen}>
			{/* Sidebar */}
			<div className={styles.sidebar}>
				<Sidebar />
			</div>

			{/* SideNav */}
			<div className={styles.sidenav}>
				<Sidenav />
			</div>

			{/* Chat */}
			<div className={styles.chat}>
				<Chat />
			</div>
		</main>
	);
};

export default ChatScreen;
