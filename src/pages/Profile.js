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

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:4000/getTodo/`, { headers: { token } })
      .then((res) => {
        console.log(res.data.todos);
        setSearch(res.data.todos);
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
        .put("http://localhost:4000/createTodo", { text, selectedDate, userID })
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
        <h1>List of Foods</h1>
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
          <Button gradientDuoTone="purpleToBlue" size="sm" type="submit">
            Add
          </Button>
        </form>
        <DatePicker
          className="text-center w-28 rounded-md"
          selected={selectedDate}
          onChange={handleDateChange}
        />
        <div className="flex flex-col">
          {search.map((todo) => (
            <div key={todo._id} className="item">
              <ToEatCards
                text={todo.text}
                todoId={todo._id}
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
