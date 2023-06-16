import { useRef, FormEvent } from 'react';
import styles from './Searchbar.module.css';
import { AutoComplete } from 'antd';

const Searchbar = () => {
	const inputSearchRef = useRef<HTMLInputElement>(null);

	// const onChange = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	console.log(inputSearchRef?.current?.value);
	// };

	const searchOptions = [
		{
			// id: 1,
			label: 'label 1',
			value: 'value 1',
		},
		{
			// id: 2,
			label: 'label 2',
			value: 'value 2',
		},
		{
			// id: 3,
			label: 'label 3',
			value: 'value 3',
		},
		{
			// id: 4,
			label: 'label 4',
			value: 'value 4',
		},
		{
			// id: 5,
			label: 'label 5',
			value: 'value 5',
		},
	];

	return (
		<AutoComplete
			className={styles.searchInput}
			allowClear
			placeholder='Search'
			options={searchOptions}
			filterOption={true}
			// onSelect={(value) => {
			// 	console.log('selected', value);
			// }}
			// onSearch={(value) => {
			// 	console.log('searched text value', value);
			// }}
		/>
	);
};

export default Searchbar;
