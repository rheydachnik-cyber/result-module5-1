import styles from './button.module.css';

export const Button = ({ children, clickHandler, type = 'button' }) => {
	return (
		<button className={styles.clickable} onClick={clickHandler} type={type}>
			{children}
		</button>
	);
};
