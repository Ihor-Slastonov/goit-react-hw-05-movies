import { Link } from "react-router-dom";
import { List, CardWrapper, MovieName } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
    return (
      <List>
        {movies.map(movie => (
          <CardWrapper key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width='200'
              />
              <MovieName>{movie.title}</MovieName>
            </Link>
          </CardWrapper>
        ))}
      </List>
    );
};
