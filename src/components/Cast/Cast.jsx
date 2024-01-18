// import {} from './Cast.styled';
import { useEffect, useState } from 'react';
import { fetchGetMovieCastById } from '../../api';
import { useParams } from 'react-router-dom';
import { Text, ImgMovie, Wraper, CastList, CastItem, WraperImg } from './Cast.styled';
import noPersonImage from '../../img/no-person.png';

export const MovieDetailsCast = () => {
  const [cast, setCast] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getMovieCastById = async movieId => {
      try {
        const response = await fetchGetMovieCastById(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieCastById(params.movieId);
  }, [params.movieId]);


  return (
    <Wraper>
      {cast && cast.cast ? (
        <CastList>
          {cast.cast.map(item => (
            <CastItem key={item.id}>
              <WraperImg>
                <ImgMovie
                  src={
                    item.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                      : noPersonImage
                  }
                  alt={item.name}
                />
              </WraperImg>
              <Text>{item.name}</Text>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <div>Loading...</div>
      )}
    </Wraper>
  );
};
