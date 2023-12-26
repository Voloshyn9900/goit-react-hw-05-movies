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



export const fetchM = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDVkNjZiYmY1ODM5NGUwZGNkYWRkNGZhYzIzMGE0OSIsInN1YiI6IjY1OGI0MWJmNjhiNzY2NjliMDJkNGQzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ijA9gyzi6xYVLvnBVtNAr12oBM0ZbpIsV-7t8lO1csk',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/search/movie?query=avatar&include_adult=false&language=en-US&page=1',
      options
    )
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

}; 
  
