import { Task } from "../Task/Task";
import styles from "./Tasks.module.css";

export function Tasks() {
	return (
		<section className={styles.task}>
			<header className={styles.header}>
				<div>
					<p>Tarefas Criadas</p>
					<span>10</span>
				</div>

				<div>
					<p className={styles.textPurple}>Concluídas</p>
					<span>2 de 10</span>
				</div>
			</header>

			<div className={styles.list}>
				<Task />
				<Task />
			</div>
		</section>
	);
}