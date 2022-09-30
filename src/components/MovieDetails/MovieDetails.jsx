import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieOrShowDetail } from '../../features/movieSlice';
import { fetchMovies } from '../../features/movieSlice';
import '../MovieDetails/MovieDetails.css';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const { movieName, movieOrShowDetail } = useSelector(
    (state) => state.allMovies
  );

  useEffect(() => {
    dispatch(fetchMovies(movieName));
  }, [dispatch, movieName]);

  useEffect(() => {
    dispatch(fetchMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div className='movie-section'>
      <div className='section-left'>
        <div className='movie-title'>{movieOrShowDetail.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <i className='fa fa-star'></i> :{' '}
            {movieOrShowDetail.imdbRating}
          </span>
          <span>
            IMDB Votes <i className='fa fa-thumbs-up'></i> :{' '}
            {movieOrShowDetail.imdbVotes}
          </span>
          <span>Year: {movieOrShowDetail.Year}</span>
        </div>
        <div className='movie-plot'>{movieOrShowDetail.Plot}</div>

        <div className='movie-info'>
          <div className='director'>
            Director : {movieOrShowDetail.Director}
          </div>
          <div className='genre'>Genre: {movieOrShowDetail.Genre}</div>
          <div className='Language'>Language: {movieOrShowDetail.Language}</div>
          <span className='Actors'>Actors: {movieOrShowDetail.Actors}</span>
        </div>
      </div>

      <div className='section-right'>
        <img src={movieOrShowDetail.Poster} alt={movieOrShowDetail.Poster} />
      </div>
    </div>
  );
};

export default MovieDetail;
