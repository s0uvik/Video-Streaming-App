import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchResultContainer = () => {
  const searchResults = useSelector(
    (state) => state.searchResults.searchResults
  );
  console.log(searchResults);

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
