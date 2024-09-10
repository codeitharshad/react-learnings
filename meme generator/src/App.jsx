import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]); // To manage the list of tasks
  const [task, setTask] = useState(""); // To handle input for new tasks

  // Add new task
  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask(""); // Clear input after adding
    }
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove task
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTodo}>Add Task</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
