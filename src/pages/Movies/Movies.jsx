import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MovieList/MovieList';

import { fetchSearchMovie } from 'services/movieApi';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function fechMovies() {
      try {
        const movies = await fetchSearchMovie(searchQuery);
        if (movies.length === 0) {
          return toast.error('Movie Not Found');
        }
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    setLoader(true);
    fechMovies();
  }, [searchQuery]);

  return (
    <>
      <main>
        <SearchBox onSubmit={updateQueryString} />
        {movies && <MoviesList movies={movies} />}
      </main>
      {loader && <Loader />}
    </>
  );
}
