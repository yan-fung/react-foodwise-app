import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import icon from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "https://foodwise-api.onrender.com/";
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
        navigate("/foods");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={icon} className="w-60" />
        </div>

        {/* <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-teal-200">
          LOGIN
        </h1> */}
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md flex-col gap-4 w-full pt-10 pr-5 pl-5"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
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
            LOGIN
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
