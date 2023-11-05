import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    nowPlayingTrending: null,
    nowPlayingSeries: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
    addNowPlayingTrending: (state, action) => {
      state.nowPlayingTrending = action.payload;
    },
    addNowPlayingSeries: (state, action) => {
      state.nowPlayingSeries = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addNowPlayingTrending,
  addNowPlayingSeries,
} = moviesSlice.actions;

export default moviesSlice.reducer;
