import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import {
  addNowPlayingMovies,
  addNowPlayingSeries,
  addNowPlayingTrending,
} from "../../redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer/MainContainer";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import useData from "../../hooks/useData";

const Browse = () => {
  useNowPlayingMovies();
  useMovieTrailer();
  const linkMovies =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const action_name = addNowPlayingTrending;
  useData(linkMovies, action_name);

  const linkSeries =
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
  const action_name2 = addNowPlayingSeries;
  useData(linkSeries, action_name2);

  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
