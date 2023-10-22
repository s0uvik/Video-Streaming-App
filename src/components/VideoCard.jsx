import React from "react";

const VideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);
  return (
    <div className=" rounded-md w-[350px] flex flex-col items-center shadow-lg p-2">
      <img
        className=" w-full"
        src={videoInfo.snippet.thumbnails.medium.url}
        alt=""
      />
      <ul>
        <li className=" text-lg">{videoInfo.snippet.title}</li>
        <li className=" text-gray-500 font-bold">
          {videoInfo.snippet.channelTitle}
        </li>
        <li className=" text-gray-500">{videoInfo.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
