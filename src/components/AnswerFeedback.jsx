import React from "react";
import "./AnswerFeedback.css";

const AnswerFeedback = ({ correct }) => {
  return (
    <p className={correct ? "feedback-correct" : "feedback-incorrect"}>
      {correct ? "✅ Correcto!" : "❌ Incorrecto"}
    </p>
  );
};

export default AnswerFeedback;

