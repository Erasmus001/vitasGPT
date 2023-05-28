import { useHideDefaultMenu } from '@/Hooks/useHideMenu';
import styles from './AuthScreen.module.css';
import AuthForm from '@/Components/AuthForm/AuthForm';
import SigninScreen from './SigninScreen/SigninScreen';
import SignupScreen from './SignupScreen/SignupScreen';

const AuthScreen = () => {
	// const { hideMainMenu } = useHideDefaultMenu();
	// hideMainMenu();

	return (
		<main className={styles.authScreen}>
			{/* <SigninScreen /> */}
			<SignupScreen />
		</main>
	);
};

export default AuthScreen;
