import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
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
      <div className="text-center pt-10">
        <h1 className="text-gray-900 dark:text-gray-300 text-xl">LOGIN</h1>
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

    // <>
    //   <div className="App">
    //     <h1>FOODWISE APP</h1>
    //   </div>
    //   <form onSubmit={handleSubmit} className="form">
    //     <h1>Login</h1>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input type="email" value={email} onChange={handleEmail} />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input type="password" value={password} onChange={handlePassword} />
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </>
  );
};

export default Login;
