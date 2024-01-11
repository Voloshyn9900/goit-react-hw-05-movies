import React from 'react';
import {
  MovieListCont,
  MovieListStyle,
} from './MovieSearchList.styled';
import { MovieItem } from './MovieSearchItem';

export const MovieList = ({ movies, titleMasege }) => {
  return (
    <MovieListCont>
      <h1>{titleMasege}</h1>
        <MovieListStyle>
          <MovieItem movies={movies} />
        </MovieListStyle>
    </MovieListCont>
  );
};
