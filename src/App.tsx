import React, { useState } from "react";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

export interface ITask {
	id: string;
	title: string;
	isComplete: boolean;
}

function App() {
	const [tasks, setTasks] = useState<ITask[]>([
		{
			id: "1",
			title: "Teste",
			isComplete: true,
		},
	]);

	return (
		<>
			<Header />
			<Tasks tasks={tasks} />
		</>
	);
}

export default App;
