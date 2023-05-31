import { useState } from 'react';

export const useShowModal = () => {
	const [isModalShowing, setIsModalShowing] = useState<Boolean>(false);

	const showModal = () => {
		alert('Modal showing');
		setIsModalShowing(true);

		alert(isModalShowing);
	};

	return { showModal, isModalShowing };
};
