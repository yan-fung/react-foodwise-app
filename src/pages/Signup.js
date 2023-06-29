import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
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
    <>
      <div className="text-center pt-10">
        <h1 className="text-gray-900 dark:text-gray-300 text-xl">SIGN UP</h1>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md flex-col gap-4 w-full pt-10 pr-5 pl-5"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              placeholder="Caris To"
              required
              type="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="caristo@gmail.com"
              required
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              required
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button gradientDuoTone="purpleToBlue" type="submit">
            SIGN UP
          </Button>
        </form>
      </div>
    </>

    // <form onSubmit={handleSubmit} className="form">
    //   <h1>Sign up</h1>
    //   <div>
    //     <label htmlFor="username">Username</label>
    //     <input type="username" value={username} onChange={handleUsername} />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email</label>
    //     <input type="email" value={email} onChange={handleEmail} />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input type="password" value={password} onChange={handlePassword} />
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default Signup;
