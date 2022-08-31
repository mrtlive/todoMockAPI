import React, { useState } from "react";
import { useAPI } from "../Context/ContextAPI";
import axios from "axios";

function TodoAdd() {
  const { todos, setTodos, setNewTodo, newTodo, addTodo } = useAPI();

  function handleChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setNewTodo({
      content: value,
      isCompleted: false,
    });
  }

  return (
    <div className="row">
      <div className="col-10">
        <input
          type="text"
          name="todo"
          className="form-control form-control-lg"
          placeholder="Todo..."
          value={newTodo.content}
          onChange={handleChange}
        />
      </div>

      <div className="col-2">
        <button className="btn btn-lg btn-danger" onClick={addTodo}>
          Add
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default TodoAdd;
