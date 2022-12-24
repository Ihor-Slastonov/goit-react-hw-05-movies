import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';

import { fetchMovieDetails } from 'services/movieApi';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [poster, setPoster] = useState('');
  const [loader, setLoader] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    async function fetchMovieDetailsCard() {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        if (Object.keys(movieDetails).length === 0) {
          return toast('Sorry, movie not found! Please try again later');
        }
        const moviePosterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        setMovieDetails(movieDetails);
        setPoster(moviePosterUrl);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchMovieDetailsCard();
  }, [movieId]);

  const { title, release_date, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <main>
        {movieDetails && poster && (
          <MovieCard
            title={title}
            year={release_date.slice(0,4)}
            poster={poster}
            vote={vote_average}
            overview={overview}
            genres={genres}
          />
        )}
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </main>
      {loader && <Loader />}
    </>
  );
};
