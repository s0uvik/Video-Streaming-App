import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Watch from "./Watch";
import VideoContainer from "./VideoContainer";
import SearchResultContainer from "./SearchResultContainer";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.isOpen.isOpen);
  console.log(isMenuOpen)

  return (
    <div className=" flex">
      {isMenuOpen && <SideBar />}
      <Routes>
        <Route path="/" element={<VideoContainer />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/search" element={<SearchResultContainer />} />
      </Routes>
    </div>
  );
};

export default Body;
