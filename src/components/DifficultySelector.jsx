import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import api from "../services/api";
import logo from "../assets/logo.png";
import "./DifficultySelector.css";

const DifficultySelector = () => {
  const { setDifficulty } = useContext(GameContext);
  const [difficulties, setDifficulties] = useState([]);

  useEffect(() => {
    api.getDifficulties()
      .then((data) => setDifficulties(data))
      .catch((err) => console.error("Error cargando dificultades:", err));
  }, []);

  const handlePlay = () => {
    setDifficulty("easy"); //easy si no se elige nada
  };

  return (
    <div className="selector-container">

      <h1>PREGUNTADOS</h1>
      <img src={logo} alt="Logo del juego" className="game-logo" />

      {/* Botón principal Jugar */}
      <button className="play-btn" onClick={handlePlay}>
        ▶️ Jugar
      </button>

      <h2 className="selector-title">🎯 Elegí la dificultad</h2>

      {/* Botones de dificultad */}
      <div className="selector-buttons">
        {difficulties.map((diff) => (
          <button
            key={diff}
            className="difficulty-btn"
            onClick={() => {
              console.log("Dificultad elegida:", diff);
              setDifficulty(diff);
            }}
          >
            {diff}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;


