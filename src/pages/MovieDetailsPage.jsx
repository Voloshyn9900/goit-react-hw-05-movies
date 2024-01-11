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
import { useEffect, useState, useRef } from 'react';
import { fetchGetMovieDetailsById } from '../api';
import { useNavigate, Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');


  const { movieId } = useParams();
  

  useEffect(() => {
    const getMovieDetailsById = async () => {
      try {
        const response = await fetchGetMovieDetailsById(movieId);
        setMovie(response);
      } catch (error) {
        navigate('*');
        console.error(error);
      }
    };
    getMovieDetailsById();
  }, [movieId, navigate]);

  return (
    <>
      {movie ? (
        <HeroCont>
          <Wraper>
            <LinkBack to={backLinkRef.current}>Back to list</LinkBack>
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
