import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Error from '../Error/Error';
import MovieDetail from '../MovieDetails/MovieDetails';
import routes from './routes.json';

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route
          path={`${routes.MOVIEDETAIL}:imdbID`}
          element={<MovieDetail />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
