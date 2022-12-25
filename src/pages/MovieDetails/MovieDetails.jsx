import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';

import { fetchMovieDetails } from 'services/movieApi';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({
    backdrop_path: '',
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
  });
  const [loader, setLoader] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetailsCard() {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        if (Object.keys(movieDetails).length === 0) {
          return toast('Sorry, movie not found! Please try again later');
        }
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchMovieDetailsCard();
  }, [movieId]);

  // ------ Go back button-------///
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const goBack = () => navigate(backLink);
  // --------------------------////

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/300x500?text=Poster+Not+Found';
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.floor(vote_average * 10);
  const genresStr = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <main>
        <button type="button" onClick={goBack}>
          Back to
        </button>
        {movieDetails && (
          <MovieCard
            title={title}
            year={releaseDate}
            poster={poster}
            vote={voteAverage}
            overview={overview}
            genres={genresStr}
          />
        )}

        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {loader && <Loader />}
    </>
  );
}
