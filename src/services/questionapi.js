// src/services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
console.log(API_BASE_URL);  // Output will be: http://localhost:3000

 // Replace with your backend URL

export const fetchQuestions = async () => {
  const response = await axios.get(`${API_BASE_URL}/questions`);
  return response.data;
};

export const postQuestion = async (questionData) => {
  const response = await axios.post(`${API_BASE_URL}/questions`, questionData);
  return response.data;
};

export const likeQuestion = async (questionId) => {
  const response = await axios.put(`${API_BASE_URL}/questions/${questionId}/like`);
  return response.data;
};

export const saveQuestion = async (questionId) => {
  const response = await axios.put(`${API_BASE_URL}/questions/${questionId}/save`);
  return response.data;
};

export const addReply = async (questionId, replyText) => {
  const response = await axios.post(`${API_BASE_URL}/questions/${questionId}/replies`, { text: replyText });
  return response.data;
};

export const fetchSavedQuestions = async () => {
  const response = await axios.get(`${API_BASE_URL}/users/saved-questions`);
  return response.data;
};