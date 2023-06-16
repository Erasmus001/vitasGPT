import { FormEvent, useRef, useState } from 'react';
import { AuthScreenProps } from '@/Types';
import styles from './AuthForm.module.css';
import { Logo } from '@/UI/Logo/Logo';
import ChatGPTLogo from '../../assets/images/chatGPT.png';
import { Link } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';

const AuthForm = ({ type }: AuthScreenProps) => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [isEmailLoading, setIsEmailLoading] = useState<Boolean>(false);
	const [isGoogleLoading, setIsGoogleLoading] = useState<Boolean>(false);
	const { EmailSignin, EmailSignup, GoogleSignin } = useAuth();

	const handleSignin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const handleSignup = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
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
							<Link to={'/resetPassword'}>Forgot password?</Link>
						</div>
					)}
					<div className={styles.button}>
						<button
							type='submit'
							disabled={!emailRef || (!passwordRef && true)}
						>
							{type === 'Signin' ? 'Signin' : 'Signup'}
							{isEmailLoading && 'Signing in....'}
						</button>
					</div>
				</form>

				{/* <div className={styles.authButtons}>
					<div className={styles.authButtonsDivider}>
						<span>
							<hr />
							<p>or</p>
							<hr />
						</span>
					</div>
					<div className={styles.button}>
						<button type='button' onClick={GoogleSignin}>
							{isGoogleLoading ? 'Signing with Google' : 'Continue with Google'}
						</button>
						<button type='button'>Continue with Microsoft</button>
					</div>
				</div> */}
			</div>

			<div className={styles.authLink}>
				{type === 'Signin' ? (
					<span>
						Don't have an account? <Link to='/signup'>Sign up</Link>
					</span>
				) : (
					<span>
						Already have an account? <Link to='/signin'>Sign in</Link>
					</span>
				)}
			</div>
		</div>
	);
};

export default AuthForm;

// AiOutlinePoweroff;