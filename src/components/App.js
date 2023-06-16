import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import IsAnonymous from "./IsAnonymous";
import IsPrivate from "./IsPrivate";

const App = () => {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const [wastedNum, setWastedNum] = useState(0);
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    authenticateUser();
  }, [isLoggedIn]);

  const handleRemovedTodo = async (todoId) => {
    try {
      await axios
        .delete(`http://localhost:4000/deleteTodo/${todoId}`)
        .then((res) => {
          setTask([...task]);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleWastedClick = async (id) => {
    try {
    } catch (err) {}
    handleRemovedTodo(id);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home wastedNum={wastedNum} setWastedNum={setWastedNum} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            <IsAnonymous>
              <Login />
            </IsAnonymous>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <IsAnonymous>
              <Signup />
            </IsAnonymous>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <IsPrivate>
                <Profile
                  wastedNum={wastedNum}
                  setWastedNum={setWastedNum}
                  text={text}
                  setText={setText}
                  task={task}
                  setTask={setTask}
                  search={search}
                  setSearch={setSearch}
                  onRemovedTodo={handleRemovedTodo}
                  handleWastedClick={handleWastedClick}
                />
              </IsPrivate>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
