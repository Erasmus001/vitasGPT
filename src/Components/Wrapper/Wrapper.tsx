import styles from './Wrapper.module.css';

type WrapperProp = {
	children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProp) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
