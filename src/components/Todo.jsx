import { useState } from "react";
import crossIcon from "../assets/icon-cross.svg";

const Todo = ({ content, isComplete, updateTodo, removeTodo }) => {
  const [showIcon, setShowIcon] = useState(window.innerWidth <= 420 ? true : false);
  const textStyles = {
    textDecoration: isComplete ? "line-through" : "none",
  };
  const iconStyles = {
    display: showIcon ? "block" : "none",
  };
  return (
    <div
      onMouseEnter={() => (window.innerWidth > 420 ? setShowIcon(true) : "")}
      onMouseLeave={() => (window.innerWidth > 420 ? setShowIcon(false) : "")}
      className="todo"
    >
      <div className="todo-content">
        <input
          type="checkbox"
          name="checkbox"
          className="todo-checkbox"
          checked={isComplete}
          onChange={updateTodo}
        />
        <p style={textStyles}>{content}</p>
      </div>
      <button className="delete-btn" onClick={removeTodo}>
        <img style={iconStyles} src={crossIcon} alt="" />
      </button>
    </div>
  );
};

export default Todo;
