import React from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { toggleAction } from "../utils/store/menuToggleSlice";

const Watch = () => {
  const [searchParams] = useSearchParams();
  
  const dispatch = useDispatch()
  dispatch(toggleAction.hideMenu())

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
