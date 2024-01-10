import React from 'react';
import {
  MovieItemStyle,
  ImgMovie,
  LinkStyle,
  NameMov,
  DescriptionMov,
} from './MovieSearchItem.styled';

export const MovieItem = ({ movies }) => {
  return (
    <>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <LinkStyle to={`${movie.id}`}>
              <MovieItemStyle>
                <ImgMovie
                  src={`https://image.tmdb.org/t/p/w500/${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.title}
                />
                <NameMov>{movie.title}</NameMov>
                <DescriptionMov>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </DescriptionMov>
              </MovieItemStyle>
            </LinkStyle>
          </li>
        );
      })}
    </>
  );
};
