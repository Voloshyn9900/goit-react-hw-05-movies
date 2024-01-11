import React from 'react';
import {
  MovieItemStyle,
  ImgMovie,
  LinkStyle,
  NameMov,DescriptionMov
} from './MovieItem.styled';
import { useLocation } from 'react-router-dom';

export const MovieItem = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(movie => {
        return (
          <MovieItemStyle key={movie.id}>
            <LinkStyle to={`movies/${movie.id}`} state={{ from: location }}>
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
            </LinkStyle>
          </MovieItemStyle>
        );
      })}
    </>
  );
};

