import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const ScoreBoard = () => {
  const { correctCount, questions, currentIndex } = useContext(GameContext);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2>
        ✅ Correctas: {correctCount} / {questions.length}
      </h2>
      <h3>
        📌 Pregunta {currentIndex + 1} de {questions.length}
      </h3>
    </div>
  );
};

export default ScoreBoard;
