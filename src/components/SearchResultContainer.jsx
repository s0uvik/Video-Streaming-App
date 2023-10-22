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
      search
      {searchResults?.map((item) => {
        return <VideoCard key={item.id} videoInfo={item} />;
      })}
    </div>
  );
};

export default SearchResultContainer;
