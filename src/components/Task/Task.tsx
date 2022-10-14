import styles from "./Taks.module.css";

import { ITask } from "../../App";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
	task: ITask;
	onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props) {
	const isCompleted = true;

	return (
		<div className={styles.task}>
			<button className={styles.checkContainer}>
				{isCompleted ? <BsFillCheckCircleFill /> : <div />}
			</button>

			<p>{task.title}</p>

			<button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
