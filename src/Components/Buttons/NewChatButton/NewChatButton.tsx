import { useNavigate } from 'react-router-dom';
import styles from './NewChatButton.module.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { useAuth } from '@/Context/AuthContext';

const NewChatButton = () => {
	const { currentUser } = useAuth();
	console.log(currentUser);

	const createNewChat = async () => {
		const doc = await addDoc(
			collection(db, 'users', currentUser?.email, 'chats'),
			{
				messages: [],
				userId: currentUser?.email,
				createdAt: serverTimestamp(),
			}
		);
	};

	const navigate = useNavigate();
	return (
		<button type='button' className={styles.newChatBtn} onClick={createNewChat}>
			+ Add new chat
		</button>
	);
};

export default NewChatButton;
