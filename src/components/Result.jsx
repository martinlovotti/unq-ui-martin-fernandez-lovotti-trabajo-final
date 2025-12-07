import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Result = () => {
  const { correctCount, questions, setDifficulty } = useContext(GameContext);

  return (
    <div>
      <h1>Resultado final</h1>
      <p>
        Respuestas correctas: {correctCount} de {questions.length}
      </p>
      <button onClick={() => setDifficulty(null)}>Jugar otra vez</button>
    </div>
  );
};

export default Result;
