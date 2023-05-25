import { LogoProps } from '@/Types';
import styles from './Logo.module.css';

export const Logo = ({ logo, altName }: LogoProps) => {
	return (
		<div className={styles.logo}>
			<img
				src={logo}
				alt={altName}
				loading='lazy'
				className={styles.logoImg}
			/>
		</div>
	);
};
