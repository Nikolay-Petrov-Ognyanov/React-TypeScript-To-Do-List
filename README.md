# React TypeScript To-Do List
This is a simple to-do list web application built using **React** and **TypeScript**. It allows users to add, complete and filter tasks. This project demonstrates core React concepts such as component structure, props, state management with `useState`, conditional rendering and basic TypeScript usage.

---
## Features
- Add new to-do items.
- Toggle completion status (strike-through completed items).
- Filter by **All**, **Active** or **Completed** tasks.
- ptimized with `useCallback`, `useMemo` and `React.memo`.
- Fully typed with TypeScript interfaces.
---
## Project Structure
```bash
src/
├── components/
│ ├── FilterButtons.tsx # Component to switch between filters.
│ ├── TodoInput.tsx # Form to add new todos.
│ ├── TodoItem.tsx # Renders an individual todo item.
│ └── TodoList.tsx # Renders the list of todos.
├── types.ts # Shared types/interfaces.
├── App.tsx # Main application logic.
├── App.css # Styles for the app.
└── index.tsx # React entry point.
```
## Setup and Run
### Prerequisites
- Node.js (>= 14.x recommended)
- npm or yarn
### Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/Nikolay-Petrov-Ognyanov/React-TypeScript-To-Do-List.git
    cd React-TypeScript-To-Do-List
2. Install dependencies:
    npm install or yarn
3. Start the development server:
    npm start or yarn start
4. Open your browser and visit: http://localhost:3000