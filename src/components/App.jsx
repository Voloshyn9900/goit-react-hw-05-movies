import { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { PreLoader } from './PreLoader/PreLoader';
import { AppLayout } from './SharedLayout';
import { MovieDetailsCast } from './Cast/Cast';
import { MovieDetailsReviews } from './Reviews/Reviews';
import { useEffect } from 'react';


const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#151515',
          }}
        >
          <PreLoader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieDetailsCast />}></Route>
            <Route path="reviews" element={<MovieDetailsReviews />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
