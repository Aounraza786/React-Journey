import { useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [input, setinput] = useState("");

  function handleAddToDo() {
    if (input.trim === "") return;
    const newToDo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodo((prevsTodo) => [...prevsTodo, newToDo]);
    setinput("");
  }

  function handleToggleTodo(id) {
    setTodo((prevsTodo) =>
      prevsTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  function handleDeleteTodo(id) {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>TODo App </h1>
      <input
        type="text"
        value={input}
        placeholder="Enter Todo"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <button
        style={{ marginLeft: "5px", border: "1px solid" }}
        onClick={handleAddToDo}
      >
        Add
      </button>
      {todo.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todo.map((todos) => (
            <li key={todos.id}>
              <span
                onClick={() => handleToggleTodo(todos.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todos.text}
              </span>

              <button
                onClick={() => handleDeleteTodo(todos.id)}
                style={{ marginLeft: "10px", background: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default TodoApp;
