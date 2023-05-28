import { favThreadsProps } from '@/Types';
import styles from './ChatCard.module.css';
import { NavLink } from 'react-router-dom';

const ChatCard = ({
	threadTitle,
	threadDesc,
	timeStamp,
	id,
}: favThreadsProps) => {
	return (
		<NavLink to={`/chat/${id}`} className={styles.chatCard}>
			<div className={styles.hd}>
				<h4>{threadTitle}</h4>
				{/* <p>{timeStamp}</p> */}
			</div>
			<p>{threadDesc}</p>
		</NavLink>
	);
};

export default ChatCard;
