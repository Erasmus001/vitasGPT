import { useAuth } from '@/Context/AuthContext';
import AuthScreen from '@/Screens/AuthScreen/AuthScreen';
import ChatScreen from '@/Screens/ChatScreen/ChatScreen';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	const { currentUser } = useAuth();
	return !currentUser ? <UnAuthenticatedRoutes /> : <AuthenticatedRoutes />;
};

const AuthenticatedRoutes: React.FC = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<ChatScreen />} />
				<Route path='/signout' element={<AuthScreen />} />
				<Route path='/chat/id' element={<ChatScreen />} />
			</Routes>
		</Router>
	);
};

const UnAuthenticatedRoutes: React.FC = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AuthScreen type={'Signin'} />} />
				<Route path='/signin' element={<AuthScreen type={'Signin'} />} />
				<Route path='/signup' element={<AuthScreen type={'Signup'} />} />
				{/* <Route path='/reset-password' element={<ChatScreen />} /> */}
			</Routes>
		</Router>
	);
};

export default AppRouter;
