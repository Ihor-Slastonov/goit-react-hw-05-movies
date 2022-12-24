
export const MovieCard = ({ poster, title, year, vote, overview, genres }) => {
  return (
    <div>
      <img src={poster} alt={title} width="200" />
      <div>
        <h2>
          {title} ({year})
        </h2>
        <p>User Score: {Math.floor(vote * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
