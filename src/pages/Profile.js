import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import ToEatCards from "../components/ToEatCards";

const Profile = () => {
  const { userID } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put("http://localhost:4000/createTodo", { text, userID })
        .then((res) => {
          setTask([...task, res.data.text]);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemovedTodo = async (todoId) => {
    try {
      await axios
        .delete(`http://localhost:4000/deleteTodo/${todoId}`)
        .then((res) => {
          setTask([...task]);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <>
        <>
          <h1>List of Foods</h1>
        </>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="text">Enter the item</label>
          <input type="text" value={text} onChange={handleText} />
          <button type="submit">Add</button>
        </form>
      </>
      {search.map((todo) => (
        <div key={todo._id} className="item">
          <ToEatCards
            text={todo.text}
            todoId={todo._id}
            onRemoveTodo={handleRemovedTodo}
          />
        </div>
      ))}
    </>
  );
};

export default Profile;
