import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import "./ScoreBoard.css";
const ScoreBoard = () => {
  const { correctCount, questions } = useContext(GameContext);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h4>
        ✅ Correctas: {correctCount} / {questions.length}
      </h4>
    </div>
  );
};

export default ScoreBoard;
