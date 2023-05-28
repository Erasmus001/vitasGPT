import { useHideDefaultMenu } from '@/Hooks/useHideMenu';
import styles from './AuthScreen.module.css';
import AuthForm from '@/Components/AuthForm/AuthForm';
import SigninScreen from './SigninScreen/SigninScreen';
import SignupScreen from './SignupScreen/SignupScreen';
import { AuthScreenProps } from '@/Types';

const AuthScreen = ({ type }: AuthScreenProps) => {
	// const { hideMainMenu } = useHideDefaultMenu();
	// hideMainMenu();

	return (
		<main className={styles.authScreen}>
			{/* <SigninScreen /> */}
			<SignupScreen type={type} />
		</main>
	);
};

export default AuthScreen;
