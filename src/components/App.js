import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import IsAnonymous from "./IsAnonymous";
import IsPrivate from "./IsPrivate";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1>FOODWISE APP</h1>
      </div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
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
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
