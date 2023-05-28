import './App.css';
import AppRouter from './Router/AppRouter';

const App: React.FC = (): JSX.Element => {
	return (
		<main className='mainApp'>
			<AppRouter />
		</main>
	);
};

export default App;
