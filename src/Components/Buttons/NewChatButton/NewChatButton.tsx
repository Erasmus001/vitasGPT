import styles from './NewChatButton.module.css';

const NewChatButton = () => {
	return (
		<button type='button' className={styles.newChatBtn}>
			+ {" "} Add new chat
		</button>
	);
};

export default NewChatButton;
