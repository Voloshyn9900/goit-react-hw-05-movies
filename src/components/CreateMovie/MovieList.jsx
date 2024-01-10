import React from 'react';
import {
  MovieListCont,
  MovieListWraper,
  MovieListStyle,
  SvgArrow,
} from './MovieList.styled';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies, titleMasege }) => {
  return (
    <MovieListCont>
      <h1>{titleMasege}</h1>
      <MovieListWraper>
        <MovieListStyle>
          <MovieItem movies={movies} />
        </MovieListStyle>
        <SvgArrow />
      </MovieListWraper>
    </MovieListCont>
  );
};
