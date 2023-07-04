import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Button, TextInput } from "flowbite-react";
import axios from "axios";
import ToEatCards from "../components/ToEatCards";
import peach from "../assets/giphy.gif";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Profile = ({
  text,
  setText,
  task,
  setTask,
  search,
  setSearch,
  wastedNum,
  setWastedNum,
  onRemovedTodo,
  handleWastedClick,
}) => {
  const { userID } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const API_URL = "https://foodwise-api.onrender.com";

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${API_URL}/getTodo/`, { headers: { token } }).then((res) => {
      console.log(res.data.todos);
      // setSearch(res.data.todos);
    });
  }, [task]);

  const handleText = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleDateChange = (date) => {
    const selectedDate = new Date(date);
    setSelectedDate(selectedDate);
    console.log(selectedDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`${API_URL}/createTodo`, { text, selectedDate, userID })
        .then((res) => {
          setTask([...task, res.data.text]);
        });
      setText("");
      setSelectedDate("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="text-center p-5">
        <h1 className="font-bold text-amber-950">Less waste, more taste.</h1>
        <span className="font-bold text-amber-950">
          Embrace a sustainable food culture 🍲
        </span>
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="pb-5 flex items-center">
          <TextInput
            id="email1"
            placeholder="Enter the item..."
            required
            type="text"
            value={text}
            onChange={handleText}
            className="pr-2"
          />
          <div className="pr-2">
            <DatePicker
              className="text-sm text-center w-28 h-10 border-pink-200 hover:border-cyan-300 rounded-md text-gray-900"
              selected={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          <Button gradientDuoTone="purpleToBlue" size="sm" type="submit">
            Add
          </Button>
        </form>
        <div className="grid grid-cols-4 pb-4" style={{ width: "350px" }}>
          <div className="text-md font-bold">Items</div>
          <div className="text-md font-bold text-center">Expires in (days)</div>
        </div>
        <div className="flex flex-col">
          {search.map((todo) => (
            <div key={todo._id} className="item">
              <ToEatCards
                text={todo.text}
                todoId={todo._id}
                expirydate={todo.expirydate}
                onRemoveTodo={onRemovedTodo}
                wastedNum={wastedNum}
                setWastedNum={setWastedNum}
                onIncreaseWastedClick={handleWastedClick}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "80%",
          transform: "translate(-50%, -50%)",
        }}
        className="pt-20"
      >
        <img src={peach} width={300} height={50} className="hidden md:block" />
      </div>
    </>
  );
};

export default Profile;
