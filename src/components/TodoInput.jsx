import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoInput = ({ createTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: uuidv4(),
      content: todoText,
      isComplete: false,
    };
    createTodo(todo);
    setTodoText("");
  };

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };
  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <label className="input-circle" htmlFor="input"></label>
      <input
        onChange={(event) => handleChange(event)}
        id="input"
        value={todoText}
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default TodoInput;
