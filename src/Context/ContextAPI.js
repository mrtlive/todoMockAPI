import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import TodoAdd from "../components/TodoAdd";

const ContextAPI = createContext();

export const ProviderAPI = ({ children }) => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [visible, setVisible] = useState(false);
  const [newTodo, setNewTodo] = useState({
    content: "",
    isCompleted: null,
    id: null,
  });

  function deleteTodo(id) {
    setLoading(false);
    axios
      .delete("https://630f433737925634188b48bd.mockapi.io/todos/" + id)
      .then(function () {
        const getData = async () => {
          await axios
            .get("https://630f433737925634188b48bd.mockapi.io/todos/")
            .then(function (response) {
              setTodos(response.data);
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(function () {
              setLoading(true);
            });
        };
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function updateTodo(id, text) {
    setLoading(false);
    axios
      .put("https://630f433737925634188b48bd.mockapi.io/todos/" + id, {
        isCompleted: text,
      })
      .then(function (response) {
        const getData = async () => {
          await axios
            .get("https://630f433737925634188b48bd.mockapi.io/todos/")
            .then(function (response) {
              setTodos(response.data);
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(function () {
              setLoading(true);
            });
        };

        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function editTodo(id, text) {
    setLoading(false);
    axios
      .put("https://630f433737925634188b48bd.mockapi.io/todos/" + id, {
        content: text,
      })
      .then(function (response) {
        const getData = async () => {
          await axios
            .get("https://630f433737925634188b48bd.mockapi.io/todos/")
            .then(function (response) {
              setTodos(response.data);
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(function () {
              setLoading(true);
            });
        };

        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function addTodo() {
    {
      if (newTodo.content.length >= 3) {
        setLoading(false);
        axios
          .post("https://630f433737925634188b48bd.mockapi.io/todos", newTodo)
          .then(
            (response) => {
              setTodos([...todos, response.data]);
              setLoading(true);
            },
            (error) => {
              console.log(error);
            }
          );

        setNewTodo({ content: "", isCompleted: null, id: null });
      } else {
        alert("at least 3 character needed");
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://630f433737925634188b48bd.mockapi.io/todos/")
        .then(function (response) {
          setTodos(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setLoading(true);
        });
    };
    if (username) {
      setVisible(true);
    }
    getData();
  }, []);

  const value = {
    todos,
    setTodos,
    setNewTodo,
    newTodo,
    deleteTodo,
    addTodo,
    loading,
    username,
    setUsername,
    setVisible,
    visible,
    updateTodo,
    editTodo,
  };
  return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
};

export const useAPI = () => useContext(ContextAPI);
