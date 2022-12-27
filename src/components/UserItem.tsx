import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      className="user-item"
      key={`userId-${user.id}`}
      onClick={() => onClick(user)}
    >
      {user.id}. {user.name} leave in {user.address.city} on street{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
