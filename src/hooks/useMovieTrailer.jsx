import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = () => {
  const dispatch = useDispatch();

  const getMoiveTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/507089/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter((data) => data.type == "Trailer");
    const trailer = filteredData[0];
    dispatch(addNowPlayingTrailer(trailer));
  };

  useEffect(() => {
    getMoiveTrailer();
  }, []);
};

export default useMovieTrailer;

// {
//   "id": 507089,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "For the Fans",
//       "key": "xxDmNyY5f4k",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-10-24T16:02:18.000Z",
//       "id": "65387139ae3668010b9c24d8"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "FNAF is...",
//       "key": "3voi3nf45_4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-10-20T16:08:19.000Z",
//       "id": "6533085b0929f601389dc732"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A Look Inside",
//       "key": "AuP9krMmXrM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-10-16T16:03:04.000Z",
//       "id": "652de564ea84c700ca120daf"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Final Trailer",
//       "key": "X4d_v-HyR4o",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-08-30T19:00:10.000Z",
//       "id": "64ef92d0caa50800ab716a20"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "9fJtM5z0g7M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-06-27T14:52:13.000Z",
//       "id": "649af8b8d35dea014dce7143"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Teaser",
//       "key": "f-zqS2CiZqw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-05-17T00:57:27.000Z",
//       "id": "646429c476eecf00e31f9293"
//     }
//   ]
// }
