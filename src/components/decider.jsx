import React from "react";

const hands = ["rock", "paper", "scissor"];
// Randomly picks any sign from the hands array
const housePick = () => {
  console.log("frpm house pick");
};

function Decider({ chosen }) {
  return (
    // <div>
    //   <h1>Decider division</h1>
    // </div>
    housePick()
  );
}

export default Decider;
