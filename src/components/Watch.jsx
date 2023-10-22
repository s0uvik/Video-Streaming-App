import React from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
const Watch = () => {
  const [searchParams] = useSearchParams();
  

  return (
    <div className=" flex justify-center gap-9 w-full mt-4 m-2">
      <iframe
      className=" h-[600px] w-[1000px]"
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

      <LiveChat/>
    </div>
  );
};

export default Watch;
