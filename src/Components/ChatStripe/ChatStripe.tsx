import { chat } from '@/Types';
import Wrapper from '../Wrapper/Wrapper';
import styles from './ChatStripe.module.css';
import TypeWriter from '@/UI/TypeWriter/TypeWriter';
import VitasGPT from '../../assets/images/chatGPT.png';
import UserAvatar from '../../assets/node.svg';

const ChatStripe = ({ chat }: chat) => {
	return (
		<div
			className={
				chat.role === 'User' ? styles.chatStripeUser : styles.chatStripe
			}
		>
			<Wrapper>
				<div className={styles.content}>
					<div className={styles.avatar}>
						<img
							src={chat.role === 'User' ? VitasGPT : VitasGPT}
							alt=''
							loading='lazy'
							className={
								chat.role === 'User' ? styles.userLogo : styles.gptLogo
							}
						/>
					</div>
					<div className={styles.text}>
						<TypeWriter text={chat.content || 'This is the text'} />
					</div>
				</div>
			</Wrapper>
		</div>
	);

	<p>{chat.content || 'This is the text'}</p>;
};

export default ChatStripe;
