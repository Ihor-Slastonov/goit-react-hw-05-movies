import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';

import { fetchTrendMovies } from 'services/movieApi';
import { MoviesList } from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchMoviesList() {
      try {
        const movies = await fetchTrendMovies();
        if (movies.length === 0) {
          return toast('Sorry, try again later');
        }
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchMoviesList();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
      {loader && <Loader />}
    </main>
  );
}
