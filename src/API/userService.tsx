import React, { FC } from "react";
import axios from "axios";

export default class UserService extends React.Component  {
  static async getAll(limit = 10, page = 10) {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return responce;
  }

  static async getById<IUser>(id: number) {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return responce;
  }
}
