import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Watch from "./Watch";
import VideoContainer from "./VideoContainer";
import SearchResultContainer from "./SearchResultContainer";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.isOpen.isOpen);

  return (
    <div className="flex flex-col md:flex-row justify-between relative top-[70px]">
      <div>{isMenuOpen && <SideBar />}</div>
      {/* <SideBar /> */}

      <Routes>
          <Route path="/" element={<VideoContainer />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/results" element={<SearchResultContainer />} />
        </Routes>
    </div>
  );
};

export default Body;
