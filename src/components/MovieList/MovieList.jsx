import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, CardWrapper, MovieName } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/300x500?text=Poster+Not+Found'
              }
              alt={movie.title}
              width="200"
            />
            <MovieName>{movie.title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
