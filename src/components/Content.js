import React, { useState } from "react";
import Items from "./Items";
import Header from "./Header";
function Content() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  return (
    <div
      className={`row m-0 justify-content-center p-5 ${theme}`}
      style={{ height: "100%", minHeight: "100vh" }}
    >
      <div className="col-6">
        <button
          className="btn btn-dark text-light mb-4 fw-bold"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
        <Header />
        <Items />
      </div>
    </div>
  );
}

export default Content;
