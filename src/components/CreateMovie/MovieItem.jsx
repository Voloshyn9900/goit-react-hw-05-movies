import React from 'react';
import {
  MovieItemStyle,
  ImgMovie,
  LinkStyle,
  NameMov,DescriptionMov
} from './MovieItem.styled';
import noPosterImage from '../../img/no-poster.png';
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
                src={
                  movie.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${
                        movie.backdrop_path || movie.poster_path
                      }`
                    : noPosterImage
                }
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

