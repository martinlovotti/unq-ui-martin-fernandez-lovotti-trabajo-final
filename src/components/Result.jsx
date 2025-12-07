import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import "./Result.css";
const Result = () => {
  const { correctCount, questions, setDifficulty } = useContext(GameContext);

  return (
    <div>
      <h2>Resultado final</h2>
      <p>
        Respuestas correctas: {correctCount} de {questions.length}
      </p>
      <button onClick={() => setDifficulty(null)}>Jugar otra vez</button>
    </div>
  );
};

export default Result;
