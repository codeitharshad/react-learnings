import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const updateTodos = (event) => {
      setNewTodo(event.target.value);
  };

  const updateTodosInUi = () => {
    if (newTodo != "") {
      setTodos([...todos, { task: newTodo, id: uuidv4(), isCompleted: false}]);
      setNewTodo("");
    }
  };

  const deleteTask = (id) => {
    setTodos((prevTodods) => todos.filter((prevTodods) => prevTodods.id != id));
  }

  const taskDone = (id) => {
    setTodos((prevTodods) => prevTodods.map((todo) => todo.id === id
    ? {...todo, isCompleted: !todo.isCompleted}
    :todo
  ))
  }

  return (
    <>
      <h1>Todo list</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Start Typing..."
          onChange={updateTodos}
          onKeyDown={(e) => {
            if (e.key === "Enter") updateTodosInUi();
          }}
          value={newTodo}
        />
        <button onClick={updateTodosInUi}>Add</button>
      </div>
      <div className="read-the-docs">
        <h3>● Tasks ●</h3>

        {todos.map((todo) => {
          return (
            <div>
              <p
                key={todo.id}
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.task}
              </p>
              {!todo.isCompleted && (
              <button onClick={() => deleteTask(todo.id)}>X</button>
              )}
              
              {!todo.isCompleted && (
                <button onClick={() => taskDone(todo.id)}>✔️</button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
