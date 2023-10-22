import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

  return (
    <div className="border shadow-lg h-[700px] px-9">
      <ul>
        <Link to={"/"}>
          <li className=" mt-3 mb-2 cursor-pointer pl-5">Home</li>
        </Link>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Shorts</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Subscriptions</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">YouTube Music</li>
      </ul>
      <hr />
      <ul>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Library</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">History</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Your video</li>
        <li className=" mt-3 mb-2 cursor-pointer pl-5">Watch Later</li>
      </ul>
    </div>
  );
};

export default SideBar;
