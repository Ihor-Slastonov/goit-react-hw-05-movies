import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';

import { fetchMovieCredits } from 'services/movieApi';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    async function fetchCasts() {
      try {
        const casts = await fetchMovieCredits(movieId);
        if (casts.length === 0) {
          return toast('Ooops, therea are no casts!Please, try again later');
          }
        setCasts(casts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchCasts();
  }, [movieId]);

  return (
    <>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                width="100"
              />
              <h4>{cast.name}</h4>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}

      {loader && <Loader />}
    </>
  );
};
