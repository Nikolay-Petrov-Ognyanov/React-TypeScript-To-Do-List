import React from "react"
import { Todo } from "../types"

// Props type for TodoItem component.
interface Props {
	todo: Todo // The todo item data to display.
	toggleTodo: (id: number) => void // Function to toggle completion status.
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
	// Handler to toggle this todo's completion status.
	const handleClick = () => toggleTodo(todo.id)

	return (
		<li
			onClick={handleClick} // Toggle completion on click.
			className={todo.completed ? "completed" : ""} // Add 'completed' class if done.
			style={{ cursor: "pointer" }} // Show pointer cursor on hover.
		>
			{todo.text} {/* Display the todo text. */}
		</li>
	)
}

export default React.memo(TodoItem)