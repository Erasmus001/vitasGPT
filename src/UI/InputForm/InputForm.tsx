import React from 'react';
import styles from './InputForm.module.css';

const InputForm = () => {
	return (
		<div className={styles.inputContainer}>
			<textarea
				// type='text'
				name='prompt'
				placeholder='Ask me anything...'
				className={styles.input}
			></textarea>
		</div>
	);
};

export default InputForm;
