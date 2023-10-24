import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { SEARCH_BY_ID_API } from "../utils/constant";
const Watch = () => {
  const [searchParams] = useSearchParams();

  const fetchVideoData = async () => {
    // const res = await fetch(SEARCH_BY_ID_API + searchParams.get("v"));
    const res = await fetch("https://youtube.googleapis.com/youtube/v3/videos?&id=Ks-_Mh1QhMc&key=AIzaSyAziYvxwSMAzW8mXzSlO1fMvYS_8ctUDLY");
    console.log(res)
    const data = await res.json();
    console.log(data)
  };

  useEffect(() => {
    fetchVideoData()
  }, [searchParams.get("v")])

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full gap-9 mt-4 ">
      <iframe
        className=" lg:h-[500px] lg:w-[900px] md:ml-4 w-full p-2"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;
            autoplay;
             clipboard-write;
              encrypted-media; gyroscope;
               picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <LiveChat />
    </div>
  );
};

export default Watch;
