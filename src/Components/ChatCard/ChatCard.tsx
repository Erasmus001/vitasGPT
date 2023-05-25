import { favThreadsProps } from '@/Types'
import styles from './ChatCard.module.css'

const ChatCard = ({ threadTitle, threadDesc, timeStamp }: favThreadsProps) => {
	return (
		<a href={'#'} className={styles.chatCard}>
			<div className={styles.hd}>
				<h4>{threadTitle}</h4>
				{/* <p>{timeStamp}</p> */}
			</div>
			<p>{threadDesc}</p>
		</a>
	);
};

export default ChatCard