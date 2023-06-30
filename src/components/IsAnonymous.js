import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

const IsAnonymous = (props) => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isLoggedIn) {
    return <Navigate to="/foods" />;
  } else {
    return props.children;
  }
};

export default IsAnonymous;
