import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { useEffect, useState} from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (todo) => {
    setTodos(todos.concat(todo));
  };

  const updateTodo = (id) => {
    const todoObj = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todoObj, isComplete: !todoObj.isComplete };
    setTodos(todos.map((todo) => (todo.id !== id ? todo : updatedTodo)));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <Header theme={theme} handleThemeToggle={handleThemeToggle} />
        <TodoInput createTodo={createTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          clearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
