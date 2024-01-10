// import React, { useEffect, useState } from 'react';
import { fetchSerchMovies } from 'api';
import { MovieList } from 'components/CreateMovie/MovieList';
import { HeroCont, Title, Text, BtnHero } from './MoviesPage.styled';
import { useState, useEffect } from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const thisWeekTitle = 'NEW POPULAR LIST THIS WEEK';

  const query = 'dog';
  useEffect(() => {
    const getSerchMovies = async () => {
      try {
        const response = await fetchSerchMovies(query);
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    getSerchMovies();
  }, []);

setTimeout(() => {
  console.log(movies);
}, 2000);

  return (
    <>
      <HeroCont>
        <Title>popular</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          dignissimos iste, officiis nulla, necessitatibus sunt nostrum, cumque
          laudantium distinctio unde ex aliquid possimus eos accusantium illo
          dicta. Dolores, provident harum.
        </Text>
        <BtnHero>Watch</BtnHero>
      </HeroCont>
      {movies ? (
        <MovieList movies={movies} titleMasege={thisWeekTitle} />
      ) : (
        <div>"111"</div>
      )}
    </>
  );
}
