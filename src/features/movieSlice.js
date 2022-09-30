import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(
  'post/fetchMovies',
  async (movie) => {
    return fetch(
      `http://www.omdbapi.com/?apikey=61936ad&s=${movie}&type=movie`
    ).then((res) => res.json());
  }
);

export const fetchMovieOrShowDetail = createAsyncThunk(
  'posts/fetchMovieOrShowDetail',
  async (id) => {
    return fetch(
      `http://www.omdbapi.com/?apikey=61936ad&i=${id}&Plot=full`
    ).then((res) => res.json());
  }
);

const initialState = {
  movies: {},
  movieOrShowDetail: {},
  movieName: 'captain',
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    movieName: (state, action) => {
      state.movieName = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {},
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {},

    [fetchMovieOrShowDetail.fulfilled]: (state, action) => {
      state.movieOrShowDetail = action.payload;
    },
  },
});

export const { movieName } = movieSlice.actions;

export default movieSlice.reducer;
