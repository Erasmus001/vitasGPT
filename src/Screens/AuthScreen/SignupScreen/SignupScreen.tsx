import AuthForm from '@/Components/AuthForm/AuthForm';
import styles from './SignupScreen.module.css';
import { AuthScreenProps } from '@/Types';

const SignupScreen = ({ type }: AuthScreenProps) => {
	console.log(type);

	return (
		<section className={styles.signupScreen}>
			<AuthForm type={type} />
		</section>
	);
};

export default SignupScreen;
