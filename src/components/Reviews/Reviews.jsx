// import {} from './Cast.styled';
import { useEffect, useState } from 'react';
import { fetchGetMovieReviewsById } from '../../api';
import { useParams } from 'react-router-dom';
import {
  Text,
  Wraper,
  ReviewsWraper,
  ReviewsList,
  ReviewsItem,
} from './Reviews.styled';

export const MovieDetailsReviews = () => {
  const [reviews, setReviews] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getMovieReviewsById = async movieId => {
      try {
        const response = await fetchGetMovieReviewsById(movieId);
        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieReviewsById(params.movieId);
  }, [params.movieId]);

  const markup = (
    <Wraper>
      {reviews ? (
        <ReviewsList>
          {reviews.map(({ id, author, content, created_at }) => (
            <ReviewsItem key={id}>
              <ReviewsWraper>
                <Text>
                  {author} | {created_at}
                </Text>
                <Text>{content}</Text>
                <hr />
              </ReviewsWraper>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </Wraper>
  );

  return (
    <>{reviews.length > 0 ? markup : <Text>No reviews available.</Text>}</>
  );
};
