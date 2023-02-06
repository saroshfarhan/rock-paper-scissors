import React from "react";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";

const divBgStyles = {
  paper: "bg-gradient-to-t from-paperStart to-paperEnd",
  scissor: "bg-gradient-to-t from-scissiorsStart to-scissiorsEnd",
  rock: "bg-gradient-to-t from-rockStart to-rockEnd",
};

function Decider({ userChoice, playAgain, houseChoice }) {
  /*
scenarios
user    house    result
paper   rock     user
paper   scissor  house
scissor rock     house
scissor paper    user
rock    paper    house
rock    scissor  user
*/
  /*
Function to decide winner 
@params user's choice, house's choice
returns outcome of the game
*/
  const declareWinner = (user, house) => {
    // console.log("userchoice " + user);
    // console.log("houseChoice " + house);
    if (user === house) {
      return "Draw";
    } else if (
      (user === "paper" && house === "rock") ||
      (user === "scissor" && house === "paper") ||
      (user === "rock" && house === "scissor")
    ) {
      return "You Win";
    } else {
      return "You Lose";
    }
  };

  const renderChoiceImage = (choice) => {
    switch (choice) {
      case "paper":
        return <img src={paper} alt="paper icon" />;
        break;

      case "scissor":
        return <img src={scissor} alt="scissor icon" />;
        break;

      case "rock":
        return <img src={rock} alt="scissor icon" />;
        break;
      default:
        break;
    }
  };
  return (
    <div
      id="decider-container"
      className="mx-44 mt-32 flex items-center justify-between text-white"
    >
      <div id="user-choice">
        <p>User Choice</p>
        <p>{userChoice}</p>
        {renderChoiceImage(userChoice)}
      </div>
      <div>
        <p>{declareWinner(userChoice, houseChoice)}</p>
        <button type="button" onClick={playAgain}>
          Play Again
        </button>{" "}
      </div>
      <div id="house-choice">
        <p>House choice</p>
        <p>{houseChoice}</p>
        {renderChoiceImage(houseChoice)}
      </div>
    </div>
  );
}

export default Decider;
