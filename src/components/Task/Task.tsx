import styles from "./Taks.module.css";

import { ITask } from "../../App";
import { TbTrash } from "react-icons/tb";

interface Props {
	task: ITask;
}

export function Task({ task }: Props) {
	return (
		<div className={styles.task}>
			<button className={styles.checkContainer}>
				<div />
			</button>

			<p>{task.title}</p>

			<button className={styles.deleteButton}>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
