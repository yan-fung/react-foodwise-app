import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "http://localhost:4000";
  const { storeItems, setIsLoggedIn } = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, password };

    await axios
      .post(`${API_URL}/login`, body)
      .then((response) => {
        storeItems(response.data.token);
        setIsLoggedIn(true);
        navigate("/profile");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="App">
        <h1>FOODWISE APP</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={handlePassword} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
