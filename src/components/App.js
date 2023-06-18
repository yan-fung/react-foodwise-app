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
  const { isLoggedIn, authenticateUser, userID } = useContext(AuthContext);
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
        .put(`http://localhost:4000/deleteTodo/${todoId}`, { display: false })
        .then((res) => {
          setTask([...task]);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const countWastedFood = async () => {
    try {
      await axios.get(`http://localhost:4000/count/${userID}`).then((res) => {
        console.log(res.data.total);
        setWastedNum(res.data.total);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleWastedClick = async (id) => {
    try {
      await axios
        .put(`http://localhost:4000/count/${id}`, {
          wasted: true,
          display: false,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
    countWastedFood();
    setTask([...task]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home wastedNum={wastedNum} countWastedFood={countWastedFood} />
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
