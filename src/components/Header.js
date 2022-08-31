import React from "react";
import { useAPI } from "../Context/ContextAPI";

function Header() {
  const { username } = useAPI();

  return (
    <div>
      <h1>Todo App with mockAPI</h1>
      <h1>Welcome, {username}</h1>
    </div>
  );
}

export default Header;
