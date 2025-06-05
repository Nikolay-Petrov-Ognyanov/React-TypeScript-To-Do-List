import React from "react"
import { Filter } from "../types"

// Available filter options declared outside component for stable reference.
const filters: Filter[] = ["all", "active", "completed"]

interface Props {
	currentFilter: Filter // Currently selected filter.
	setFilter: (filter: Filter) => void // Function to update the filter.
}

const FilterButtons: React.FC<Props> = ({ currentFilter, setFilter }) => {
	return (
		<div>
			{/* Render a button for each filter option. */}
			{filters.map(f => (
				<button
					key={f} // Unique key for React's list rendering.
					onClick={() => setFilter(f)} // Update filter when clicked.
					disabled={currentFilter === f} // Disable button if it's the active filter.
				>
					{/* Capitalize first letter of filter name */}
					{f.charAt(0).toUpperCase() + f.slice(1)}
				</button>
			))}
		</div>
	)
}

export default React.memo(FilterButtons)