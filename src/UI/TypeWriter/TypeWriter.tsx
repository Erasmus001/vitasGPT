import { useState, useEffect } from 'react';
import styles from './TypeWriter.module.css';

type TypeWriterProp = {
	text: string;
};

const TypeWriter = ({ text }: TypeWriterProp) => {
	const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
	const [typedText, setTypedText] = useState<string>('');

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentCharIndex < text.length) {
				setTypedText((prevText) => prevText + text[currentCharIndex]);
				setCurrentCharIndex((prevIndex) => prevIndex + 1);
			} else {
				clearInterval(intervalId);
			}
		}, 80);

		return () => {
			clearInterval(intervalId);
		};
	}, [currentCharIndex, text]);

	return <p className={styles.typeWriter}>{typedText}</p>;
};

export default TypeWriter;
