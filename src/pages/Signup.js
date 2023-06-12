import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "http://localhost:4000";

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { username, email, password };
    axios
      .post(`${API_URL}/signup`, body)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Sign up</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="username" value={username} onChange={handleUsername} />
      </div>
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
  );
};

export default Signup;
