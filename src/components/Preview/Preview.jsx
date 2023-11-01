import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Preview({ show, handleOuterBoxClick }) {
  const keyData = useSelector((store) => store.movies?.nowPlayingTrailer);

  return (
    <div
      onClick={handleOuterBoxClick}
      className={`absolute top-0 left-0 w-[100%] h-[100%]  items-center justify-center pt-10 ${show}`}
    >
      <div className="  w-[50%] h-[100%] rounded-lg bg-[#141414]">
        <div className="">
          <iframe
            className="w-[100%] aspect-video"
            src={`https://www.youtube.com/embed/${keyData?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
            allow="accelerometer; autoplay  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  );
}
