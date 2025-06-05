// Represents a single to-do item with id, text and completion status.
export interface Todo {
	id: number // Unique identifier for the todo.
	text: string // The text content of the todo.
	completed: boolean // Indicates if the todo is completed.
}

// Represents the filter types used to filter the to-do list.
export type Filter = "all" | "active" | "completed" // Filter options for showing todos.