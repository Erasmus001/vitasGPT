import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AuthContextProvider from './Context/AuthContext';
import CategoryContextProvider from './Context/CategoryContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AuthContextProvider>
			<CategoryContextProvider>
				<App />
			</CategoryContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
