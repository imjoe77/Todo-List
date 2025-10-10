Todo List App 📝
A responsive and feature-rich Todo List application built with React and Tailwind CSS. This app allows you to manage your daily tasks with ease, with all your data saved locally in your browser.

📸 Demo

<img width="1920" height="1080" alt="Screenshot (180)" src="https://github.com/user-attachments/assets/49046b0f-e7de-4c4c-add3-2ae85194ee7e" />

✨ Features
Create Todos: Easily add new tasks to your list.
Edit Todos: Click the edit icon to modify existing tasks.
Delete Todos: Remove tasks you no longer need.
Toggle Completion: Mark tasks as complete or incomplete with a checkbox. The text gets a strikthrough when completed.
Persistent Storage: Your todo list is automatically saved to your browser's localStorage and reloaded on your next visit.
Filter View: Toggle the visibility of completed tasks to keep your list clean and focused.
Responsive Design: A clean and functional layout that works on desktops, tablets, and mobile devices.


⚙️ How It Works
The application is built around a central state-driven architecture using React Hooks. The UI is a direct reflection of the component's state, and any changes to the state will automatically re-render the view.

Initialization & Persistence:
On first load, the application uses a useState lazy initializer to check the browser's localStorage.
If a previously saved list of todos is found, it's parsed and loaded into the state. Otherwise, it starts with an empty list.

A useEffect hook watches for any changes to the main todos array. Whenever a task is added, edited, deleted, or toggled, this hook automatically saves the updated array back to localStorage.

Adding & Updating Todos:
The "Add" and "Save" buttons are handled by a single function, handleAdd.
An eid (edit ID) state variable determines the mode. If eid is null, the function adds a new todo object to the array.
If a user clicks the "Edit" button on a task, handleEdit populates the input field and sets the eid. Now in "edit mode," the handleAdd function will use .map() to find the existing todo by its ID and update its text, creating a new array with the changes.

Toggling & Deleting:
When a user clicks a checkbox or delete button, the corresponding function (handleToggle or handleDelete) is called with that todo's id.
To ensure immutability (a core React principle), these functions create a new array instead of modifying the old one.
handleToggle uses .map() to return a new array where the targeted todo's isCompleted status is flipped.
handleDelete uses .filter() to return a new array that excludes the targeted todo.

Rendering:
The component renders the list by mapping over the todos array.
Before mapping, a .filter() operation is applied based on the "Show Finished" checkbox's state, which determines which items are displayed.
Each item's properties (like isCompleted) are used to conditionally apply styles, such as the line-through text decoration.

🛠️ Tech Stack
React: For building the user interface with components and state management (useState, useEffect).
Tailwind CSS: For utility-first styling and creating a responsive design.
Vite: As the fast frontend build tool and development server.
React Icons: For the edit and delete icons.

🚀 Getting Started
To get a local copy up and running, follow these simple steps.
Prerequisites
Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.
npm

Bash
npm install npm@latest -g
Installation
Clone the repository:
Bash
git clone https://github.com/imjoe77/Todo-List.git

Navigate to the project directory:
Bash
cd Todo-List
Install NPM packages:

Bash
npm install
Start the development server:
Bash

npm run dev
Your application should now be running on http://localhost:5173 (or another port if 5173 is busy).
