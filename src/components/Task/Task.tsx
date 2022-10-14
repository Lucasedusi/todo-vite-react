import "./styles.css";

import { ITask } from "../../App";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
	task: ITask;
	onDelete: (taskId: string) => void;
	onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
	return (
		<div className="task">
			<button className="checkContainer" onClick={() => onComplete(task.id)}>
				{task.isComplete ? <BsFillCheckCircleFill /> : <div />}
			</button>

			<p className={task.isComplete ? "textCompleted" : ""}>{task.title}</p>

			<button className="deleteButton" onClick={() => onDelete(task.id)}>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
