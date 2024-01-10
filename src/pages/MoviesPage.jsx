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
  const [submitted, setSubmitted] = useState(false);
  const messageTitle = `No movies found for keyword '${query}'`;

  const getSerchMovies = async () => {
    try {
      const response = await fetchSerchMovies(query);
      setMovies(response.results);
      setSubmitted(true); 
    } catch (error) {
      console.error(error);
    }
  };

  const updateTopic = e => {
    setQuery(e.target.value);
  };

  const submitTopic = e => {
    e.preventDefault();
    setSubmitted(false);
    getSerchMovies();
  };

  console.log(movies);
  console.log(query);
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
              value={query}
              type="text"
              placeholder="Movie title"
              onChange={e => updateTopic(e)}
            />
            <BtnSearch type="submit">Search</BtnSearch>
          </InputWraper>
        </form>
      </HeroCont>
      {submitted && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : submitted ? (
        <WarningMsg>{messageTitle}</WarningMsg>
      ) : null}
    </>
  );
}
