import { useState } from "react";
import Todo from "./Todo";
import Footer from "./Footer";
import Filter from "./Filter";

const TodoList = ({ todos, updateTodo, removeTodo, clearCompleted}) => {
  const [filter, setFilter] = useState("all");
  let filteredTodos = todos;
  const todoCount = todos.filter((todo) => !todo.isComplete).length;
  if (filter === "active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.isComplete);
  } else if (filter === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.isComplete);
  }
  const handleFilter = (event) => {
    if (event.target.id === "clearAll") {
      clearCompleted();
      setFilter("all");
      return;
    }
    setFilter(event.target.id);
  };

  return (
    <div id="todo-list-container">
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          content={todo.content}
          isComplete={todo.isComplete}
          updateTodo={() => updateTodo(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
      <div className="footer-container">
        <Footer filter={filter} count={todoCount} handleFilter={handleFilter} />
        {window.innerWidth <= 420 && (
          <Filter handleFilter={handleFilter} filter={filter} />
        )}
      </div>
    </div>
  );
};
export default TodoList;
