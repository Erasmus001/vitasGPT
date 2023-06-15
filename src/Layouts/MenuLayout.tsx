import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MenuLayout: FC = (): JSX.Element => {
	return (
		<main>
			<Outlet />
		</main>
	);
};

export default MenuLayout;
