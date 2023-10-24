import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

const SearchResultContainer = () => {
  const searchResults = useSelector(
    (state) => state.searchResults.searchResults
  );

  if (searchResults == null) return <ShimmerUi />;

  return (
    <div className=" mt-4 flex flex-wrap justify-center gap-4">
      {searchResults?.map((item) => {
        return (
          <Link key={item.id.videoId} to={"/watch?v=" + item.id.videoId}>
            <VideoCard videoInfo={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResultContainer;
