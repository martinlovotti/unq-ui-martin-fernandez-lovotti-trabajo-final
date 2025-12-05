import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import DifficultySelector from "./DifficultySelector";
import Question from "./Question";
import Result from "./Result";
import ScoreBoard from "./ScoreBoard";
import "./Game.css";
const Game = () => {
  const { difficulty, questions, currentIndex, finished } = useContext(GameContext);

  if (!difficulty) return <DifficultySelector />;
  if (finished) return <Result />;

  if (questions.length > 0) {
    return (
      <div>
        <ScoreBoard />
        <Question data={questions[currentIndex]} />
      </div>
    );
  }

  return <p>Cargando preguntas...</p>;
};

export default Game;
