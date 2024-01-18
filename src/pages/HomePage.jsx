// import { useEffect, useState } from 'react';
// import { fetchTrendMovies } from 'api';
import { MovieList } from 'components/CreateMovie/MovieList';
import { HeroCont, Title, Text, BtnHero } from './HomePage.styled';
import { fetchTrendMovies } from 'api';
import { useEffect, useState } from 'react';

export default function HomePage() {
  // console.log(window.innerWidth);

  const [movies, setMovies] = useState([]);
  const thisWeekTitle = 'NEW POPULAR LIST THIS WEEK';
  const lastWeekTitle = 'POPULAR LIST LAST WEEK';

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const response = await fetchTrendMovies();
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    }
    getTrendMovies();
  },[])

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
      <MovieList movies={movies} titleMasege={thisWeekTitle} />
      <MovieList movies={[...movies].reverse()} titleMasege={lastWeekTitle} />
    </>
  );
}
