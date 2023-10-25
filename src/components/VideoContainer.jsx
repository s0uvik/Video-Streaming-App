import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useFetchData from "../utils/hooks/useFetchData";
import { useDispatch } from "react-redux";
import { homeResultsAction } from "../utils/store/homeResultsSlice";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  // const fetchVideoData = async () => {
  //   const res = await fetch(YOUTUBE_API);
  //   const data = await res.json();
  //   setVideo(data.items);
  // };

  useEffect(() => {
    // fetchVideoData();

    // using custom hook
    useFetchData(YOUTUBE_API).then((data) => setVideo(data.results.items));
  }, []);

  dispatch(homeResultsAction.storeResults(video));

  if (video?.length == 0) return <ShimmerUi />;

  return (
    <div className=" mt-4 flex flex-wrap justify-center gap-4">
      {video?.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoCard name="home" videoInfo={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
