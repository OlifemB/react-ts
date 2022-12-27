import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem user={user} key={`userId-${user.id}`} />
      ))}
    </div>
  );
};

export default UserList;
