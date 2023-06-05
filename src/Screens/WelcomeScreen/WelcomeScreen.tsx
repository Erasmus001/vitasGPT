import styles from './WelcomeScreen.module.css';
import ChatGPTLogo from '../../assets/images/chatGPT.png';
import { Button } from 'antd';
import { Logo } from '@/UI/Logo/Logo';
import { useHideDefaultMenu } from '@/Hooks/useHideMenu';

const WelcomeScreen: React.FC = () => {
	// const { hideMainMenu } = useHideDefaultMenu();

	// hideMainMenu();

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.logo}>
						<Logo logo={ChatGPTLogo} altName={'ChatGPT logo'} />
					</div>
					<div className={styles.hd}>
						<h3>Welcome to VitaGPT</h3>
						<p>Login with your OpenAI account to continue</p>
					</div>

					<div className={styles.loginBtn}>
						<Button
							type='ghost'
							className={styles.loginBtn}
							color='white'
							size='middle'
							block
						>
							Log in
						</Button>
					</div>
				</div>

				<div className={styles.signupLink}>
					<span>
						Don't have an account?{' '}
						<a href='/' onClick={(event) => event.preventDefault()}>
							Sign up
						</a>
					</span>
				</div>
			</div>
		</main>
	);
};

export default WelcomeScreen;
