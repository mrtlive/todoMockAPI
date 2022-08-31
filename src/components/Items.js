import React, { useState } from "react";
import "../App.css";
import { useAPI } from "../Context/ContextAPI";
import TodoAdd from "./TodoAdd";
function Items(props) {
  const { todos, setTodos, deleteTodo, loading, updateTodo, editTodo } =
    useAPI();
  const [filtered, setFiltered] = useState(false);

  return (
    <div className="my-5">
      <TodoAdd />

      <ul className="list-group list-group-flush">
        {!loading && <h4>loading...</h4>}
        {loading &&
          todos.map((item) => (
            <li className="list-group-item p-2 d-flex mt-3" key={item.id}>
              <input
                className="focusing form-control border-0"
                type="text"
                name="items"
                defaultValue={item.content}
                style={{
                  textDecorationLine: !item.isCompleted
                    ? "none"
                    : "line-through",
                  fontWeight: "light",

                  fontSize: 20,
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    editTodo(item.id, event.target.value);
                  }
                }}
              />
              {item.isCompleted ? (
                <span
                  className="text-danger m-2"
                  onClick={() => updateTodo(item.id, false)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3894/3894647.png"
                    alt="undo icon"
                    style={{ width: 24, height: 24 }}
                  />
                </span>
              ) : (
                <span
                  className="text-danger m-2"
                  onClick={() => updateTodo(item.id, true)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    alt="complete icon"
                    style={{ width: 24, height: 24 }}
                  />
                </span>
              )}
              <span
                className="text-danger m-2 "
                onClick={() => deleteTodo(item.id)}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                  alt="delete icon"
                  style={{ width: 24, height: 24 }}
                />
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Items;
