import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const ScoreBoard = () => {
  const { correctCount, questions, currentIndex, difficulty } = useContext(GameContext);

  return (
    <div>
      <h2>
        ✅ Correctas: {correctCount} / {questions.length}
      </h2>
      <h3>
        📌 Pregunta {currentIndex + 1} de {questions.length}
      </h3>
      {difficulty && (
        <p>🎮 Jugando en dificultad: <strong>{difficulty}</strong></p>
      )}
    </div>
  );
};

export default ScoreBoard;
