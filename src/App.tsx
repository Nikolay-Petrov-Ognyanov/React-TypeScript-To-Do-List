import React, { useState, useCallback, useMemo } from "react"
import { Todo, Filter } from "./types"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import FilterButtons from "./components/FilterButtons"
import "./App.css"

const App: React.FC = () => {
	// State to hold the list of todos.
	const [todos, setTodos] = useState<Todo[]>([])

	// State to hold the current filter: "all", "active" or "completed".
	const [filter, setFilter] = useState<Filter>("all")

	// Memoized function to add a new todo to avoid recreation on every render.
	const addTodo = useCallback((text: string) => {
		const newTodo: Todo = {
			id: Date.now(), // Unique id using current timestamp.
			text, // Text content of the todo.
			completed: false, // New todos start as not completed.
		}
		// Append the new todo to the previous list.
		setTodos(prevTodos => [...prevTodos, newTodo])
	}, [])

	// Memoized function to toggle the completed status of a todo by id.
	const toggleTodo = useCallback((id: number) => {
		setTodos(prevTodos =>
			prevTodos.map(todo =>
				// Flip completed status for the matching todo.
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}, [])

	// Memoize filteredTodos to avoid unnecessary recalculations unless todos or filter changes.
	const filteredTodos = useMemo(() => {
		switch (filter) {
			case "active":
				return todos.filter(todo => !todo.completed) // Return only active todos.
			case "completed":
				return todos.filter(todo => todo.completed) // Return only completed todos.
			default:
				return todos // Return all todos.
		}
	}, [todos, filter])

	return (
		<div className="App">
			<h1>To-Do List</h1>

			{/* Input component to add new todos */}
			<TodoInput onAdd={addTodo} />

			{/* Filter buttons to select which todos to display */}
			<FilterButtons currentFilter={filter} setFilter={setFilter} />

			{/* List of todos filtered by the selected filter */}
			<TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
		</div>
	)
}

export default App