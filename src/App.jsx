import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

function App() {
  const [todo, settodo] = useState("");
  const [finished, setfinished] = useState(true);

  const [todos, settodos] = useState(() => {
    try {
      const todoString = localStorage.getItem("todos");
      return todoString ? JSON.parse(todoString) : [];
    } catch (e) {
      console.error("Invalid todos in localStorage", e);
      return [];
    }
  });

  const [eid, seteid] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (id) => {
    const todotoEdit = todos.find((t) => t.id === id);
    settodo(todotoEdit.todo);
    seteid(id);
  };

  const handleAdd = () => {
    if (!todo.trim()) return;

    if (eid) {
      settodos(todos.map((t) => (t.id === eid ? { ...t, todo } : t)));
      seteid(null);
    } else {
      settodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
    }

    settodo("");
  };

  const handleDelete = (id) => {
    settodos(todos.filter((t) => t.id !== id));
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleToggle = (stodo) => {
    settodos(
      todos.map((t) =>
        t.id === stodo.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  return (
    <>
      <Navbar />

      <div className="container bg-gray-300 min-h-[83vh] w-[95vw] m-auto my-5 rounded-xl relative overflow-auto p-4 sm:p-6 md:p-8">
        {/* Top Section */}
        <h1 className="text-xl sm:text-2xl font-bold mx-3 sm:mx-8 mt-2 sm:mt-5">
          Add a Todo
        </h1>

        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 mx-3 sm:mx-8">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Add a todo"
            className="border-2 border-gray-400 rounded-lg p-2 w-full sm:w-1/2 my-3 sm:my-0"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 w-full sm:w-auto"
          >
            {eid ? "Save" : "Add"}
          </button>
        </div>

        <div className="flex items-center mx-3 sm:mx-8 mt-4">
          <input
            className="mr-2 w-4 h-4"
            type="checkbox"
            checked={finished}
            onChange={() => setfinished(!finished)}
          />
          <label className="text-base sm:text-lg">Show Finished</label>
        
          
        </div>
        <div className="bg-black/100 w-auto m-2 p-0.5 h-0.9 opacity-30 rounded"></div>

        {/* Todo List */}
        <h1 className="text-xl sm:text-2xl font-bold mx-3 sm:mx-8 mt-5">
          Todos List
        </h1>

        <div className="todos flex flex-col gap-3 mt-4 mx-3 sm:mx-8">
          {todos.length === 0 && (
            <h1 className="text-lg sm:text-xl font-normal my-5">
              No todos to display
            </h1>
          )}

          {todos
            .filter((i) => (finished ? true : !i.isCompleted))
            .map((i) => (
              <div
                key={i.id}
                className="todo flex flex-col sm:flex-row sm:items-center gap-3 justify-between bg-gray-200 p-3 sm:p-4 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={i.isCompleted}
                    onChange={() => handleToggle(i)}
                    className="w-4 h-4"
                  />
                  <h2
                    className={`text-base sm:text-lg ${
                      i.isCompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {i.todo}
                  </h2>
                </div>

                <div className="btn flex gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => handleEdit(i.id)}
                    className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm sm:text-base"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(i.id)}
                    className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm sm:text-base"
                  >
                   <MdDeleteSweep />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
