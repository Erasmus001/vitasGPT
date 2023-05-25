import './App.css';
import AuthScreen from './Screens/AuthScreen/AuthScreen';
import ChatScreen from './Screens/ChatScreen/ChatScreen';
import WelcomeScreen from './Screens/WelcomeScreen/WelcomeScreen';

const App: React.FC = () => {
	return (
		<main className='mainApp'>
			{/* <WelcomeScreen /> */}
			{/* <ChatScreen /> */}
			<AuthScreen />
		</main>
	);
};

export default App;
