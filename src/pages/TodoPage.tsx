import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import List from "../components/UI/List";
import { ITodo, IUser } from "../types/types";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const responce = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(responce.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <List
          items={todos}
          renderItem={(todo: ITodo) => (
            <TodoItem todo={todo} key={`todoId=${todo.id}`} />
          )}
        />
      </div>
    </div>
  );
};

export default TodoPage;
