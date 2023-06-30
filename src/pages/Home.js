import React, { useEffect } from "react";
import apple from "../assets/apple.png";
import onion from "../assets/high.gif";
import garlic from "../assets/low.gif";

const Home = ({ wastedNum, countWastedFood }) => {
  useEffect(() => {
    countWastedFood();
  }, []);

  return (
    <>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div style={{ position: "relative" }} className="pt-20">
            <img src={apple} />
            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "40%",
                transform: "translate(-30%, -50%)",
              }}
              className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-teal-400"
            >
              <h1>Weekly Wasted Number</h1>
              {wastedNum}
            </div>
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              className="pt-20"
            >
              <img
                src={wastedNum > 1 ? onion : garlic}
                className="animate-headShake w-300 h-60"
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
