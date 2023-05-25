import { useState, useEffect } from 'react';

// * Electron Based imports
const { ipcRenderer } = window.require('electron');

export const useHideDefaultMenu = () => {
	// const [isHidden, setIsHidden] = useState(false);

	const hideMainMenu = () => ipcRenderer.send('hide-menu');

  const showMainMenu = () => ipcRenderer.send('show-menu');

	//* Call the hideMainMenu function when the component mounts
	useEffect(() => {
		hideMainMenu();

		//* Clean up by restoring the menu when the component unmounts...
		return () => showMainMenu();
	}, []);

	return { hideMainMenu, showMainMenu };
};
