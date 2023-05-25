import ChatGPTLogo from '../../assets/images/chatGPT.png';
import styles from './SidebarLogo.module.css';

const SidebarLogo = () => {
	return (
		<img
			src={ChatGPTLogo}
			alt=''
			height={'20px'}
			width={'20px'}
			className={styles.sidebarLogo}
		/>
	);
};

export default SidebarLogo;
