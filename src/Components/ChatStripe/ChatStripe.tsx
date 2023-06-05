import { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import ReactMarkdown from 'react-markdown';

function ChatStripe() {
	const [chatContent, setChatContent] = useState('');

	return (
		<MDXProvider>
			<ReactMarkdown>{chatContent}</ReactMarkdown>
		</MDXProvider>
	);
}

export default ChatStripe;
