import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { movieName } from '../../features/movieSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (movie) {
      dispatch(movieName(movie));
    } else {
      alert('Please enter movie name');
    }
    setMovie('');
    navigate('/');
  };

  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            MovieList
          </Link>
          <form className='d-flex input-group w-auto'>
            <input
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              type='search'
              className='form-control rounded'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='search-addon'
            />
            <span className='input-group-text border-0' id='search-addon'>
              {/* <i className='fas fa-search'></i> */}
            </span>
            <button onClick={searchHandler}>
              <i className='fas fa-search'></i>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Header;
