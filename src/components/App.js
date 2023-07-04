import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import NavbarComponent from "./Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import IsAnonymous from "./IsAnonymous";
import IsPrivate from "./IsPrivate";

const App = () => {
  const API_URL = "https://foodwise-api.onrender.com";
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
        .put(`${API_URL}/deleteTodo/${todoId}`, { display: false })
        .then((res) => {
          setTask([...task]);
          // console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const countWastedFood = async () => {
    try {
      await axios.get(`${API_URL}/count/${userID}`).then((res) => {
        // console.log(res.data.total);
        setWastedNum(res.data.total);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleWastedClick = async (id) => {
    try {
      await axios
        .put(`${API_URL}/count/${id}`, {
          wasted: true,
          display: false,
        })
        .then((res) => {
          console.log(res.data.wasted);
        });
    } catch (err) {
      console.log(err);
    }
    countWastedFood();
    setTask([...task]);
  };

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home wastedNum={wastedNum} countWastedFood={countWastedFood} />
            ) : (
              <IsAnonymous>
                <Login />
              </IsAnonymous>
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
          path="/foods"
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
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
