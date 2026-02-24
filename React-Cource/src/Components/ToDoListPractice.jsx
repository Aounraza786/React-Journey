function ToDoLists() {
  const todos = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Practice map()", completed: false },
    { id: 3, text: "Understand keys", completed: true },
  ];
  if (todos.length === 0) {
    return <p>No List Found: </p>;
  }

  return (
    <>
      <h3>Todo List Practice</h3>
      {todos.map((todo) => (
        <li key={todo.id} style={{ background: "Blue", color: "white" }}>
          {todo.text}
          {" - "} {todo.completed ? "Completed" : "Pending"}
        </li>
      ))}
    </>
  );
}
export default ToDoLists;
