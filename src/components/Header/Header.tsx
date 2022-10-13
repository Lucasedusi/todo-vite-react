import logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo" />

			<form className={styles.newTaksForm}>
				<input placeholder="Adicione uma tarefa" />
				<button>Criar</button>
			</form>
		</header>
	);
}
