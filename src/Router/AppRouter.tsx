import { useAuth } from '@/Context/AuthContext';
import HomeLayout from '@/Layouts/HomeLayout';
import MenuLayout from '@/Layouts/MenuLayout';
import AccountingScreen from '@/Screens/AccountingScreen/AccountingScreen';
import CustomersScreen from '@/Screens/CustomersScreen/CustomersScreen';
import MenuScreen, { SelectedCategory } from '@/Screens/MenuScreen/MenuScreen';
import OrderScreen from '@/Screens/OrdersScreen/OrderScreen';
import ReservationScreen from '@/Screens/ReservationsScreen/ReservationScreen';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	const { currentUser } = useAuth();
	return !currentUser ? <UnAuthenticatedRoutes /> : <AuthenticatedRoutes />;
};

const AuthenticatedRoutes: React.FC = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route element={<HomeLayout />}>
					<Route index path='/' element={<p>Home</p>} />
					<Route path='/menu' element={<MenuScreen />} />
					<Route path='/customers' element={<CustomersScreen />} />
					<Route path='/accounting' element={<AccountingScreen />} />
					<Route path='/reservations' element={<ReservationScreen />} />
					<Route path='/orders' element={<OrderScreen />} />
				</Route>
			</Routes>
		</Router>
	);
};

const UnAuthenticatedRoutes: React.FC = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route element={<HomeLayout />}>
					<Route index path='/' element={<p>Home</p>} />
					<Route element={<MenuLayout />}>
						<Route index path='/menu' element={<MenuScreen />} />
						<Route path='/:id' element={<SelectedCategory />} />
					</Route>
					{/* <Route path='/menu/:id' element={<SelectedCategory />} /> */}
					<Route path='/customers' element={<CustomersScreen />} />
					<Route path='/accounting' element={<AccountingScreen />} />
					<Route path='/reservations' element={<ReservationScreen />} />
					<Route path='/orders' element={<OrderScreen />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
