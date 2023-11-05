import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
// import { addNowPlayingTrending } from "../redux/moviesSlice";
// import { addNowPlayingSeries } from "../redux/moviesSlice";

const useData = (link, action_name) => {
  const dispatch = useDispatch();

  const getMoiveData = async (link) => {
    const data = await fetch(link, API_OPTIONS);
    const json = await data.json();

    dispatch(action_name(json.results));
  };

  useEffect(() => {
    getMoiveData(link);
  }, []);
};

export default useData;
