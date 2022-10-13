import styles from "./Taks.module.css";

import { TbTrash } from "react-icons/tb";

export function Task() {
	return (
		<div className={styles.task}>
			<button className={styles.checkContainer}>
				<div />
			</button>

			<p>Lembrar de limpar casa e jogar o lixo para fora</p>

			<button className={styles.deleteButton}>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
