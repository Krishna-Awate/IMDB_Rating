import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import '../MovieListing/MoviesListing.css';

const MovieListing = () => {
  const movie = useSelector((state) => state.allMovies.movies);
  const renderMovies =
    movie.Response === 'True' &&
    movie.Search.map((movie, index) => {
      return (
        <div className='movie-col' key={index}>
          <MovieCard data={movie} />
        </div>
      );
    });
  return (
    <>
      <div className='movie-container'>{renderMovies}</div>
    </>
  );
};

export default MovieListing;
