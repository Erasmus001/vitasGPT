import { ThemeContextProp } from '@/Types';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
	theme: 'light',
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: ThemeContextProp) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const globalVal = {
		theme,
    toggleTheme
	};

	return (
		<ThemeContext.Provider value={globalVal}>{children}</ThemeContext.Provider>
	);
};
