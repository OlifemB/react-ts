import React, { FC, useState } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
