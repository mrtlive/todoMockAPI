import React, { useState } from "react";
import Content from "./Content";
import { useAPI } from "../Context/ContextAPI";

function Container() {
  const { username, setUsername, setVisible, visible } = useAPI();

  function handleChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setUsername(value);
  }
  function saveUsername() {
    localStorage.setItem("username", username);
    setVisible(true);
  }

  return (
    <div className="text-center">
      {!visible && (
        <div className="row m-0 justify-content-center">
          <div className="col-6 mt-5">
            <br />
            <input
              type="text"
              className="form-control form-control-lg border-0 border-bottom"
              placeholder="Username..."
              onChange={handleChange}
            />
            <br />
            <button
              className="btn btn-lg btn-danger"
              onClick={() => saveUsername()}
            >
              Remember Me !
            </button>
          </div>
        </div>
      )}
      {visible && <Content />}
    </div>
  );
}

export default Container;
