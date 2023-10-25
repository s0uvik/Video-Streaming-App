import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
  AiFillSave,
} from "react-icons/ai";

const Watch = () => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const homePageResults = useSelector((state) => state.homeResults.homeResults);
  console.log(homePageResults);

  return (
    <main className=" w-full flex gap-4 flex-col justify-center items-center lg:flex-row lg:items-start ">
      <div className=" w-[97%]">
        <section className=" w-[100%] h-[350px] md:h-[450px] lg:h-[550px]">
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={"https://www.youtube.com/watch?v=" + videoId}
          />
        </section>

        <section className=" flex justify-between items-center py-3 border shadow-md w-full">
          <span className=" flex items-center gap-6 pl-4">
            <BiUserCircle className=" text-5xl font-normal" />
            <h1 className=" font-semibold text-lg">Channel Name</h1>
          </span>

          <div className=" flex gap-9 item-center md:mr-10">
            <span
              onClick={() => {
                setLike(!like);
                setDisLike(false);
              }}
              className=" text-2xl cursor-pointer"
            >
              {like ? <AiFillLike /> : <AiOutlineLike />}
            </span>
            <span
              onClick={() => {
                setDisLike(!disLike);
                setLike(false);
              }}
              className=" text-2xl cursor-pointer"
            >
              {disLike ? <AiFillDislike /> : <AiOutlineDislike />}
            </span>

            <span className=" text-2xl cursor-pointer">
              <AiFillSave />
            </span>
          </div>
        </section>
      </div>

      <LiveChat />
    </main>
  );
};

export default Watch;
