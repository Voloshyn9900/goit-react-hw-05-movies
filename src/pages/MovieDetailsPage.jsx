import {
  HeroCont,
  Title,
  Text,
  Wraper,
  ImgMovie,
  StyledLink,
  ItemLink,
  ListLink,
  LinkBack,
} from './MovieDetailsPage.styled';
import { useEffect, useState } from 'react';
import { fetchGetMovieDetailsById } from '../api';
import {
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState();

  const location = useLocation();
  console.log('useLocation', location);
  // const location = useLocation();
  // console.log("location ", location);
  // const backLinkRef = useRef(location);
  // console.log('backLinkRef ', backLinkRef);
  const params = useParams();
  console.log('useParams ', params);

  // console.log('QuizDetailsPage location', location);
  // console.log('QuizDetailsPage backLinkRef', backLinkRef.current);

  useEffect(() => {
    const getMovieDetailsById = async movieId => {
      try {
        const response = await fetchGetMovieDetailsById(movieId);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieDetailsById(params.movieId);
  }, [params.movieId]);


  return (
    <>
      {movie ? (
        <HeroCont>
          <Wraper>
            <LinkBack>Back to list</LinkBack>
            <Title>{movie.title}</Title>
            <ImgMovie
              src={`https://image.tmdb.org/t/p/w500/${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.title}
            />
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              dignissimos iste, officiis nulla, necessitatibus sunt nostrum,
              cumque laudantium distinctio unde ex aliquid possimus eos
              accusantium illo dicta. Dolores, provident harum.
            </Text>
          </Wraper>
          <Wraper>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              dignissimos iste, officiis nulla, necessitatibus sunt nostrum,
              cumque laudantium distinctio unde ex aliquid possimus eos
              accusantium illo dicta.
            </Text>
            <ListLink>
              <ItemLink>
                <StyledLink to={'cast'}>Cast</StyledLink>
              </ItemLink>
              <ItemLink>
                <StyledLink to={'reviews'}>Reviews</StyledLink>
              </ItemLink>
            </ListLink>
            <Outlet />
          </Wraper>
        </HeroCont>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
