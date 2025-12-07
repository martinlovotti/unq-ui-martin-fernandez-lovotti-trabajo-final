import React from "react";


const AnswerFeedback = ({ correct }) => {
  return (
    <p>
      {correct ? "✅ Correcto!" : "❌ Incorrecto"}
    </p>
  );
};

export default AnswerFeedback;

