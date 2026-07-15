import { useNavigate } from 'react-router-dom';
import styles from './todo-item.module.css';

export const TodoItem = ({ id, title, completed }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/task/${id}`);
	};

	return (
		<div className={styles.taskContainer}>
			<input
				className={styles.statusCheckbox}
				type="checkbox"
				checked={completed}
				readOnly
				disabled
			/>
			<div className={styles.taskTitle} onClick={handleClick}>
				<span className={styles.titleText} title={title}>
					{title}
				</span>
			</div>
		</div>
	);
};
