import React from "react";
import { useSelector } from "react-redux";

export default function VideoContainer() {
  // const TrailerIds = useSelector((store) => store.movies?.nowPlayingMovies);
  const keyData = useSelector((store) => store.movies?.nowPlayingTrailer);
  const autoPlay = "0";

  return (
    <>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${keyData?.key}?autoplay=${autoPlay}&mute=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
}
//&iv_load_policy=0&modestbranding=1
