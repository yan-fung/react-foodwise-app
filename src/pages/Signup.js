import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import icon from "../assets/login.png";

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
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={icon} className="w-60" />
        </div>

        {/* <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-teal-200">
          SIGN UP
        </h1> */}
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
  );
};

export default Signup;
