import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 
            focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
                     />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-3 py-2 mb-2 rounded"
            >
              {t}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
