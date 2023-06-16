import AuthForm from '@/Components/AuthForm/AuthForm';
import styles from './SigninScreen.module.css';
import { AuthScreenProps } from '@/Types';

const SigninScreen = ({ type }: AuthScreenProps) => {
	return (
		<section className={styles.signinScreen}>
			<AuthForm type={type} />
		</section>
	);
};

export default SigninScreen;
