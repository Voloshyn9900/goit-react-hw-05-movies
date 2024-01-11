import { fetchSerchMovies } from 'api';
import { MovieList } from 'components/CreateMovie/MovieSearchList';
import {
  HeroCont,
  Title,
  Text,
  WarningMsg,
} from './MoviesPage.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
   const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    
    const fetchData = async () => {
      try {
        const response = await fetchSerchMovies(query);
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);


  const handleSubmit = searchQuery => {
    setSearchParams(searchQuery === '' ? {} : { query: searchQuery });
  };

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
        <SearchMovies onSubmit={handleSubmit} LinkQuery={query} />
      </HeroCont>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <WarningMsg>No movie found for your request!</WarningMsg>
      )}
    </>
  );
}
