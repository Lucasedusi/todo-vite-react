import { ITask } from "../../App";
import { Task } from "../Task/Task";

import styles from "./Tasks.module.css";

interface Props {
	tasks: ITask[];
	onDelete: (id: string) => void;
	onComplete: (id: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
	const tasksQuantify = tasks.length;
	const completedTasks = tasks.filter((task) => task.isComplete).length;

	return (
		<section className={styles.task}>
			<header className={styles.header}>
				<div>
					<p>Tarefas Criadas</p>
					<span>{tasksQuantify}</span>
				</div>

				<div>
					<p className={styles.textPurple}>Concluídas</p>
					<span>
						{completedTasks} de {tasksQuantify}
					</span>
				</div>
			</header>

			<div className={styles.list}>
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onDelete={onDelete}
						onComplete={onComplete}
					/>
				))}
			</div>
		</section>
	);
}
