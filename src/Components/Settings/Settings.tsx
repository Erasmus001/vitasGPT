import { Modal } from 'antd';
import styles from './Settings.module.css';
import { useShowModal } from '@/Hooks/useShowModal';

const Settings = () => {
	const { showModal } = useShowModal();
	return (
		<Modal
			closable
			centered
			open
			className={styles.modal}
			onCancel={() => {
				showModal();
			}}
			onOk={() => {}}
		>
			<h3>Hello</h3>
		</Modal>
	);
};

export default Settings;
