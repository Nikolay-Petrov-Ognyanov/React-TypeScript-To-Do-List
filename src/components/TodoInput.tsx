import React, { useState, useCallback } from "react"

// Define props type for TodoInput component.
interface Props {
	onAdd: (text: string) => void // Function to add a new todo.
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
	const [text, setText] = useState("") // Local state to store input text.

	// Memoize handleSubmit to prevent unnecessary recreations on re-renders.
	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault() // Prevent default form submission behavior.
			const trimmedText = text.trim()
			if (trimmedText) { // Only add if input is not empty or whitespace.
				onAdd(trimmedText) // Call the add function passed via props.
				setText("") // Clear input after adding.
			}
		},
		[text, onAdd]
	)

	return (
		<form onSubmit={handleSubmit}>
			{/* Controlled input bound to local state. */}
			<input
				type="text"
				value={text} // Input value comes from state.
				onChange={e => setText(e.target.value)} // Update state on user input.
				placeholder="Add new task" // Placeholder text.
			/>
			<button type="submit">Add</button> {/* Submit button. */}
		</form>
	)
}

export default React.memo(TodoInput)