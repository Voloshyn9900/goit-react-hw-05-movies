import axios from 'axios';

axios.defaults.baseURL = 'https://656099a583aba11d99d129b6.mockapi.io/api/v1/';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quiz');
  return response.data;
};

export const fetchQuizById = async quizId => {
  const response = await axios.get(`/quiz/${quizId}`);
  return response.data;
};

export const addNewQuiz = async newQuiz => {
  const response = await axios.post('/quiz', newQuiz);
  return response.data;
};

export const deleteQuizById = async quizId => {
  const response = await axios.delete(`/quiz/${quizId}`);
  return response.data;
};

export const updateQuiz = async (updateId, update) => {
  const response = await axios.delete(`/quiz/${updateId}`, update);
  return response.data;
};
