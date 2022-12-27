import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import EventsExample from "../components/EventsExample";
import TodoItem from "../components/TodoItem";
import List from "../components/UI/List";
import UserItem from "../components/UserItem";
import { ITodo, IUser } from "../types/types";
import { useHistory } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(responce.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div className="container">
      <div className="row">
        <List
          items={users}
          renderItem={(user: IUser) => (
            <UserItem
              onClick={(user) => history.push(`/users/${user.id}`)}
              user={user}
              key={`userId-${user.id}`}
            />
          )}
        />
      </div>
    </div>
  );
};

export default UserPage;
