import { Logo } from '@/UI/Logo/Logo';
import styles from './ForgotPassword.module.css';
import ChatGPTLogo from '../../../assets/images/chatGPT.png';
import { Link } from 'react-router-dom';
import { useHideDefaultMenu } from '@/Hooks/useHideMenu';
import { useRef, useState } from 'react';
import { useAuth } from '@/Context/AuthContext';

const ForgotPassword = () => {
	const { hideMainMenu } = useHideDefaultMenu();
	hideMainMenu();

	const emailRef = useRef<HTMLInputElement>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {} = useAuth();

	return (
		<main className={styles.resetPassword}>
			<div className={styles.AuthLogo}>
				<Logo logo={ChatGPTLogo} altName='Logo' />
			</div>

			<div className={styles.form}>
				<div className={styles.hd}>
					<h3>Reset Password</h3>
				</div>

				<form
					className={styles.inputGroup}
					onSubmit={() => {}}
					autoComplete='on'
				>
					<div className={styles.input}>
						<input
							type='email'
							name='email'
							placeholder='johndoe@doe.com'
							required
							ref={emailRef}
						/>
					</div>
					<div className={styles.button}>
						<button type='submit' disabled={!emailRef && true}>
							{!isLoading ? 'Reset Password' : 'Resetting Password'}
						</button>
					</div>
				</form>
			</div>

			<div className={styles.authLink}>
				<span>
					Already have an account? <Link to='/signin'>Sign in</Link>
				</span>
			</div>
		</main>
	);
};

export default ForgotPassword;
