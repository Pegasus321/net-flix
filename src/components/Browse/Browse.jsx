import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import { addNowPlayingMovies } from "../../redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer/MainContainer";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const Browse = () => {
  useNowPlayingMovies();
  useMovieTrailer();

  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
