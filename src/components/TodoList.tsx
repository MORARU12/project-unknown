import React from "react";
import TodoItem from "components/TodoItem";
import { ITodo } from "types/data";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
