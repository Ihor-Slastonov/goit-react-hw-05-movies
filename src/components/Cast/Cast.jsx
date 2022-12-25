import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';

import { fetchMovieCredits } from 'services/movieApi';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCasts() {
      try {
        const casts = await fetchMovieCredits(movieId);
        if (casts.length === 0) {
          setError(true);
          return toast('Ooops, there are no cast! Please, try again later');
        }
        setCasts(casts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    setLoader(true);
    fetchCasts();
  }, [movieId]);

  return (
    <>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.cast_id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : 'https://via.placeholder.com/300x500?text=Photo+Not+Found'
                }
                alt={cast.name}
                width="100"
              />
              <h4>{cast.name}</h4>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <p>We don't have cast for this movie </p>}
      {loader && <Loader />}
    </>
  );
}
