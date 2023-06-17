import React, { useEffect } from "react";

const Home = ({ wastedNum, countWastedFood }) => {
  useEffect(() => {
    countWastedFood();
  }, []);

  return (
    <div className="home">
      <h1>Weekly Wasted Number</h1>

      {wastedNum}
    </div>
  );
};

export default Home;
