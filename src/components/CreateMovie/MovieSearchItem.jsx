import React from 'react';
import {
  MovieItemStyle,
  ImgMovie,
  LinkStyle,
  NameMov,
  DescriptionMov,
} from './MovieSearchItem.styled';
import noPosterImage from '../../img/no-poster.png';
import { useLocation } from 'react-router-dom';

export const MovieItem = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <LinkStyle to={`${movie.id}`} state={{ from: location }}>
              <MovieItemStyle>
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
              </MovieItemStyle>
            </LinkStyle>
          </li>
        );
      })}
    </>
  );
};
