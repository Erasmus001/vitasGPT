import { FormEvent, useRef } from 'react';
import { AuthScreenProps } from '@/Types';
import styles from './AuthForm.module.css';
import { Logo } from '@/UI/Logo/Logo';
import ChatGPTLogo from '../../assets/images/chatGPT.png';

const AuthForm = ({ type }: AuthScreenProps) => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const handleSignin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		console.log('====================================');
		console.log({ email, password });
		console.log('====================================');

		alert(`Welcome ${email}`);
	};

	const handleSignup = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		console.log('====================================');
		console.log({ email, password });
		console.log('====================================');

		alert(`Welcome ${email}`);
	};

	return (
		<div className={styles.authForm}>
			<div className={styles.AuthLogo}>
				<Logo logo={ChatGPTLogo} altName='Logo' />
			</div>

			<div className={styles.form}>
				<div className={styles.hd}>
					<h3>{type === 'Signin' ? 'Welcome back' : 'Create an account'}</h3>
				</div>

				<form
					className={styles.inputGroup}
					onSubmit={type === 'Signin' ? handleSignin : handleSignup}
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
					<div className={styles.input}>
						<input
							type='password'
							name='password'
							placeholder='**********'
							required
							ref={passwordRef}
						/>
					</div>
					{type === 'Signin' && (
						<div className={styles.forgotPsd}>
							<a href='#'>Forgot password?</a>
						</div>
					)}
					<div className={styles.button}>
						<button type='submit'>
							{type === 'Signin' ? 'Signin' : 'Signup'}
						</button>
					</div>
				</form>

				<div className={styles.authButtons}>
					<div className={styles.authButtonsDivider}>
						<span>
							<hr />
							<p>or</p>
							<hr />
						</span>
					</div>
					<div className={styles.button}>
						<button type='button'>Continue with Google</button>
						<button type='button'>Continue with Microsoft</button>
					</div>
				</div>
			</div>

			<div className={styles.authLink}>
				{type === 'Signin' ? (
					<span>
						Don't have an account? <a href='#'>Sign up</a>
					</span>
				) : (
					<span>
						Already have an account? <a href='#'>Sign in</a>
					</span>
				)}
			</div>
		</div>
	);
};

export default AuthForm;
