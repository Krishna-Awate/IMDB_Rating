import './MovieCard.css';
import { Link } from 'react-router-dom';
import routes from '../routes/routes.json';

const MovieCard = ({ data }) => {
  return (
    <>
      <div className='card-item'></div>
      <Link to={`${routes.MOVIEDETAIL}${data.imdbID}`}>
        <div style={{ height: '450px', width: '300px' }} className='card'>
          <div
            className='bg-image hover-overlay ripple'
            data-mdb-ripple-color='light'
          >
            <img
              src={data.Poster}
              style={{ height: '400px', width: '300px' }}
              className='img-fluid'
            />
            <a href='#!'>
              <div
                className='mask'
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
              ></div>
            </a>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{data.Title}</h5>
            <p className='card-text'>{data.Year}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
