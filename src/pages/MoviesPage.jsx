// import React, { useEffect, useState } from 'react';
import { fetchSerchMovies } from 'api';
import { MovieList } from 'components/CreateMovie/MovieSearchList';
import {
  HeroCont,
  Title,
  Text,
  BtnSearch,
  InputSearch,
  InputWraper,
  WarningMsg,
} from './MoviesPage.styled';
import { useState, useEffect } from 'react';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    
    const fetchData = async () => {
      try {
        const response = await fetchSerchMovies(query);
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);


  const submitTopic = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get('movieTitle');
    setQuery(() => inputValue);
    console.log(inputValue);
  };

  return (
    <>
      <HeroCont>
        <Title>find your movie</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          dignissimos iste, officiis nulla, necessitatibus sunt nostrum, cumque
          laudantium distinctio unde ex aliquid possimus eos accusantium illo
          dicta. Dolores, provident harum.
        </Text>
        <form onSubmit={submitTopic}>
          <InputWraper>
            <InputSearch
              name="movieTitle"
              type="text"
              placeholder="Movie title"
            />
            <BtnSearch type="submit">Search</BtnSearch>
          </InputWraper>
        </form>
      </HeroCont>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <WarningMsg>No movie found for your request!</WarningMsg>
      )}
    </>
  );
}
