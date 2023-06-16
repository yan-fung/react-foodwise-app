import React, { useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import IsAnonymous from "./IsAnonymous";
import IsPrivate from "./IsPrivate";

const App = () => {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    authenticateUser();
  }, [isLoggedIn]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
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
                <Profile />
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
