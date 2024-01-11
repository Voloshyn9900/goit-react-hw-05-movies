import {
    BtnSearch,
    InputSearch,
    InputWraper,
} from '../pages/MoviesPage.styled';
import { useState } from 'react';

export const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query.trim());
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputWraper>
          <InputSearch
            value={query}
            name="query"
            type="text"
            placeholder="Movie title"
            onChange={handleChange}
          />
          <BtnSearch type="submit">Search</BtnSearch>
        </InputWraper>
      </form>
    </>
  );
};
