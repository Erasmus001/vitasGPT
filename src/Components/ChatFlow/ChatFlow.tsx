import React from 'react';
import styles from './ChatFlow.module.css';
import { chatHistory } from '@/Data';
import ChatStripe from '../ChatStripe/ChatStripe';

const ChatFlow = () => {
	return (
		<section className={styles.chatFlow}>
			{chatHistory.map((chat) => (
				<ChatStripe key={chat.id} chat={chat} />
			))}
		</section>
	);
};

export default ChatFlow;
