import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Preview from "../Preview/Preview";

export default function VideoTitle({ title, overview }) {
  const [show, setShow] = useState("hidden");
  const navigate = useNavigate();
  const handlePlayClick = () => {
    navigate("/watch");
  };

  const handleOuterBoxClick = () => {
    setShow("hidden");
  };
  const handleMoreInfoClick = () => {
    setShow("flex");
  };

  return (
    <div
      className="absolute text-white px-5 pt-20 sm:px-6 sm:pt-28 md:px-12 md:pt-36 from-black aspect-video "
      style={{
        background: "linear-gradient(77deg,rgba(0, 0, 0, .6), transparent 85%)",
      }}
    >
      <h1 className="w-1/2 font-semibold md:font-bold text-xl sm:text-4xl md:text-6xl md:py-5 ">
        {title}
      </h1>
      <p className="py-6 hidden md:flex md:text-lg w-1/2 ">{overview}</p>
      <div className="flex gap-4 pt-4">
        <button
          onClick={handlePlayClick}
          className="py-1 sm:py-2 md:py-3 px-3 sm:px-5  md:px-7 text-sm md:text-2xl font-semibold bg-white rounded-sm sm:rounded-[4px] md:rounded-lg  text-black flex items-center justify-center hover:bg-opacity-75 "
        >
          <FaPlay className="mr-2 text-sm md:text-2xl" />
          Play
        </button>
        <button
          onClick={handleMoreInfoClick}
          className="px-2 md:p-3 sm:px-6 md:px-12 text-sm md:text-2xl font-semibold bg-[#6d6d6e] rounded-sm sm:rounded-[4px]  md:rounded-lg bg-opacity-70 flex items-center justify-center hover:bg-opacity-40 "
        >
          <AiOutlineInfoCircle className="mr-2 text-base md:text-2xl" />
          More Infoo
        </button>
        <Preview show={show} handleOuterBoxClick={handleOuterBoxClick} />
      </div>
    </div>
  );
}
// import React from "react";
// import { FaPlay } from "react-icons/fa";
// import { AiOutlineInfoCircle } from "react-icons/ai";

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className=" absolute z-20 px-12 pt-36 text-white bg-gradient-to-r from-black w-[100%] aspect-video border border-violet-500">
//       <h1 className="font-bold text-6xl py-5 ">{title}</h1>
//       <p className="py-6 text-lg w-1/4">{overview}</p>
//       <div className="my-4 md:m-0 flex items-center">
//         <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80 flex items-center mr-4">
//           <FaPlay className=" mr-2 text-2xl" />
//           Play
//         </button>
//         <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg flex items-center">
//           <AiOutlineInfoCircle className="text-white mr-2 text-2xl" />
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;
