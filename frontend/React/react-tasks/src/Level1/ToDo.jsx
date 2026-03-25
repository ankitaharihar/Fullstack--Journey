import React, { useState } from "react";

function TodoList() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>

      <h1>Task 11</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TodoList;