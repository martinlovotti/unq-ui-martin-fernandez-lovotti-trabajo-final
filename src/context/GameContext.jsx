import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  // cargar preguntas cuando se elige dificultad
  useEffect(() => {
    if (difficulty) {
      api.getQuestions(difficulty).then(setQuestions);
      setCurrentIndex(0);
      setCorrectCount(0);
      setFinished(false);
    }
  }, [difficulty]);

const answerQuestion = async (questionId, option) => {
  const result = await api.sendAnswer(questionId, option);
  if (result.answer) {
    setCorrectCount((prev) => prev + 1);
  }

  // esperar antes de avanzar
  setTimeout(() => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  }, 1000);

  return result;
};

  return (
    <GameContext.Provider
      value={{
        difficulty,
        setDifficulty,
        questions,
        currentIndex,
        correctCount,
        finished,
        answerQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
