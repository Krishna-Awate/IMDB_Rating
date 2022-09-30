import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../features/movieSlice';
import MovieListing from '../components/MovieListing/MovieListing';

const Home = () => {
  const { movie, movieName } = useSelector((state) => state.allMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(movieName));
  }, [dispatch, movieName]);

  return (
    <>
      <h3 style={{ marginTop: '20px', color: 'white' }}>Movies</h3>
      <MovieListing />
    </>
  );
};
export default Home;
