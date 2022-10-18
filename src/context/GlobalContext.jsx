import React, { createContext, useState } from "react";
import { plays } from "../config/config";

export const GlobalContextCont = createContext();

const GlobalContext = ({ children }) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [pcSelection, setPcSelection] = useState(null);
  const [winner, setWinner] = useState(null);

  function getRandomItem() {
    // get random index value
    const randomIndex = Math.floor(Math.random() * plays.length);

    // get random item
    const item = plays[randomIndex];
    setPcSelection(item);
  }

  const play = () => {
    if (
      (selected.name === "paper" && pcSelection.name === "rock") ||
      (selected.name === "rock" && pcSelection.name === "scissors") ||
      (selected.name === "scissors" && pcSelection.name === "paper")
    ) {
      setWinner("You Win");
      setScore(score + 1);
      return;
    } else if (pcSelection.name === selected.name) {
      setWinner("Tie, no one won");
      return;
    } else {
      setWinner("You Lose");
      setScore(score - 1);
      return;
    }
  };

  return (
    <GlobalContextCont.Provider
      value={{
        selected,
        pcSelection,
        winner,
        score,
        setSelected,
        setPcSelection,
        play,
        setScore,
        getRandomItem,
      }}
    >
      {children}
    </GlobalContextCont.Provider>
  );
};

export default GlobalContext;
