import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import "./Question.css";

const Question = ({ data }) => {
  const { answerQuestion } = useContext(GameContext);
  const [feedback, setFeedback] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Resetear selección y feedback al cambiar de pregunta
    setSelectedOption(null);
    setFeedback(null);
  }, [data]);

  const options = [
    { key: "option1", value: data?.option1 },
    { key: "option2", value: data?.option2 },
    { key: "option3", value: data?.option3 },
    { key: "option4", value: data?.option4 },
  ].filter(opt => opt.value);

  const handleAnswer = async (optionKey) => {
    if (selectedOption) return; // evita múltiples clicks
    setSelectedOption(optionKey);
    const result = await answerQuestion(data.id, optionKey);
    setFeedback(result.answer ? "✅ Correcto!" : "❌ Incorrecto");
  };

  return (
    <div className="question-container">
      <h3>{data?.question || "Pregunta no disponible"}</h3>
      <ul className="options-list">
        {options.length > 0 ? (
          options.map((opt, index) => (
            <li key={index}>
              <button
                onClick={() => handleAnswer(opt.key)}
                disabled={!!selectedOption}
                className={selectedOption === opt.key ? "selected" : ""}
              >
                {opt.value}
              </button>
            </li>
          ))
        ) : (
          <p>No hay opciones disponibles</p>
        )}
      </ul>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Question;

