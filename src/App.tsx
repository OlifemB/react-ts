import React, { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import UserIdPage from "./pages/UserIdPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/todos"}>Todos</NavLink>
      </div>
      <Route path={"/users"} exact>
        <UserPage />
      </Route>
      <Route path={"/users/:id"} exact>
        <UserIdPage />
      </Route>
      <Route path={"/todos"} exact>
        <TodoPage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
