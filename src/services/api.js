import axios from "axios";

const baseURL = "https://preguntados-api.vercel.app";

const errorHandler = (error, code, message) => {if (error.response.status === code) throw Error(message)}

const getDifficulties = () => axios.get(`/api/difficulty`, { baseURL })
    .then(response => response.data)
    .catch(error => errorHandler(error, 500, "Error del servidor"));

const getQuestions = (difficulty = "easy") => {
  return axios.get(`/api/questions?difficulty=${difficulty}`, { baseURL })
    .then(response => response.data)
    .catch(error => {
      errorHandler(error, 500, "Error del servidor");
      errorHandler(error, 404, "No se encontraron preguntas");
    });
};


const sendAnswer = (questionId, option) => {
  console.log("Payload enviado:", { questionId, option });
  return axios
    .post(`/api/answer`, { questionId, option }, { baseURL })
    .then((response) => {
      console.log("Respuesta del backend:", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Error en POST /api/answer:", error.response?.data || error.message);
      errorHandler(error, 500, "Error del servidor");
      errorHandler(error, 404, "No se encontró la pregunta");
      errorHandler(error, 400, "Respuesta inválida");
    });
};


export default {
    getDifficulties,
    getQuestions,
    sendAnswer,
};