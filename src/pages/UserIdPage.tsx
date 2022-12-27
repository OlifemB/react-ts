import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IUser } from "../types/types";

interface UserIdPageParams {
  id: string;
}

const UserIdPage = () => {
  const [user, setUser] = useState<IUser | null>();
  const params = useParams<UserIdPageParams>();
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const responce = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(responce.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div className="container">
      <button onClick={() => history.push("/users")}>Back</button>
      <h2>User Page</h2>
      <div>
        {user?.id}. {user?.name}
      </div>
    </div>
  );
};

export default UserIdPage;
