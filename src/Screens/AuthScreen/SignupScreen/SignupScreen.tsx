import AuthForm from '@/Components/AuthForm/AuthForm';
import styles from './SignupScreen.module.css';

const SignupScreen = () => {
	return (
		<section className={styles.signupScreen}>
			<AuthForm type='Signup' />
		</section>
	);
};

export default SignupScreen;
