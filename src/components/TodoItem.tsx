import React from "react";
import { ITodo } from "types/data";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, toggleTodo, removeTodo, title, complete } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button onClick={() => removeTodo(id)}>delete</button>
    </div>
  );
};

export default TodoItem;
