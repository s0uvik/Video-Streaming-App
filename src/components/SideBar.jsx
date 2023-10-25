import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="shadow-lg w-full bg-white md:h-[1500px] md:w-[200px] fixed ">
      <ul className=" w-full">
        <Link to={"/"}>
          <li className="mb-2 cursor-pointer pl-5">Home</li>
        </Link>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Watch Later</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Shorts</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Subscriptions</li>
      </ul>
      <hr />
      <ul className=" w-full">
        <li className=" mt-3 mb-2 cursor-pointer pl-5">YouTube Music</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Library</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">History</li>
        <li className=" mt-3 pb-2 cursor-pointer pl-5">Your video</li>
      </ul>
    </div>
  );
};

export default SideBar;
