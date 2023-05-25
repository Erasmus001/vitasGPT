import AuthForm from '@/Components/AuthForm/AuthForm';
import styles from './SigninScreen.module.css';

const SigninScreen = () => {
	return (
		<section className={styles.signinScreen}>
			<AuthForm type='Signin'/>
		</section>
	);
};

export default SigninScreen;
