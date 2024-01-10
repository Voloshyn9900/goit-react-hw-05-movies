import React from 'react';
import {
  MovieItemStyle,
  ImgMovie,
  LinkStyle,
  NameMov,DescriptionMov
} from './MovieItem.styled';

export const MovieItem = ({ movies }) => {
  return (
    <>
      {movies.map(movie => {
        return (
          <MovieItemStyle key={movie.id}>
            <LinkStyle to={`movies/${movie.id}`}>
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

// {
//   movies.map(movie => (
//     <ItemList key={movie.id}>
//       <Link to={`/list/${movie.id}`}>
//         <p>{movie.title || movie.name}</p>
//       </Link>
//       <Img
//         src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//         alt={movie.title || movie.name}
//       />
//     </ItemList>
//   ));
// }
