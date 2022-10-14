import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

export interface ITask {
	id: string;
	title: string;
	isComplete: boolean;
}

function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);

	function addTask(taskTitle: string) {
		setTasks([
			...tasks,
			{
				id: uuid(),
				title: taskTitle,
				isComplete: false,
			},
		]);
	}

	function removeTask(id: string) {
		const removeTask = tasks.filter((task) => task.id !== id);

		setTasks(removeTask);
	}

	function toggleTaskCompletedById(id: string) {
		const newTask = tasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					isComplete: !task.isComplete,
				};
			}

			return task;
		});

		setTasks(newTask);
	}

	return (
		<>
			<Header onAddTask={addTask} />
			<Tasks
				tasks={tasks}
				onDelete={removeTask}
				onComplete={toggleTaskCompletedById}
			/>
		</>
	);
}

export default App;
