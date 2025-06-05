import React from "react"
import { Todo } from "../types"
import TodoItem from "./TodoItem"

// Define props type for TodoList component.
interface Props {
	todos: Todo[] // Array of todo items to display.
	toggleTodo: (id: number) => void // Function to toggle completion status of a todo.
}

// Functional component that renders a list of TodoItem components.
const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => (
	<ul>
		{/* Map over todos and render a TodoItem for each one. */}
		{todos.map(todo => (
			<TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} /> // Pass todo and toggle handler as props.
		))}
	</ul>
)

// Export wrapped with React.memo to avoid unnecessary re-renders
export default React.memo(TodoList)