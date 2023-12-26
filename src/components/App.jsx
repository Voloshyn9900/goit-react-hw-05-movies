import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PreLoader } from './PreLoader/PreLoader';
import { AppLayout } from './SharedLayout';

// import { TopicFilter } from './Filters/Filter';
// import { Wrap } from './Filters/Filter.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

export const App = () => {
  
  return (
    <Suspense fallback={<PreLoader />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage/>} />
          <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
            <Route path="cast" element={<div>Cast</div>}></Route>
            <Route path="reviews" element={<div>Reviews</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
