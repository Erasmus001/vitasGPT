import { FormEvent, useState } from 'react';
import styles from './InputForm.module.css';
import { generateResponse } from '@/openAi';

const InputForm = () => {
	const [promptVal, setPromptVal] = useState<string>('');

	const handlePrompt = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		generateResponse(promptVal);
		// alert(promptVal);
	};
	return (
		<form className={styles.inputContainer} onSubmit={handlePrompt}>
			<input
				// type='text'
				name='prompt'
				placeholder='Hello, ask me anything...'
				className={styles.input}
				value={promptVal}
				onChange={(e) => setPromptVal(e.target.value)}
			></input>
			{/* <button>Send</button> */}
		</form>
	);
};

export default InputForm;
