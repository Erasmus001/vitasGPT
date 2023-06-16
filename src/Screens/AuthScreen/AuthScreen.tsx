import { useHideDefaultMenu } from '@/Hooks/useHideMenu';
import styles from './AuthScreen.module.css';
import SignupScreen from './SignupScreen/SignupScreen';
import { AuthScreenProps } from '@/Types';

const AuthScreen: React.FC = ({ type }: AuthScreenProps): JSX.Element => {
	const { hideMainMenu } = useHideDefaultMenu();
	hideMainMenu();

	return (
		<main className={styles.authScreen}>
			<SignupScreen type={type} />
		</main>
	);
};

export default AuthScreen;
