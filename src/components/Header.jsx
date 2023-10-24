import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../utils/store/searchSlice";
import { searchResultsAction } from "../utils/store/searchResultsSlice";
import { toggleAction } from "../utils/store/menuToggleSlice";

import {
  SEARCH_BY_KEYWORD_API,
  SEARCH_SUGGESTIONS_API,
} from "../utils/constant";

const Header = () => {
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const isMenuOpen = useSelector((state) => state.isOpen.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleAction.toggleMenu());
    console.log("toggle menu");
  };

  // fetch data for search suggestions----start
  const fetchSearchSuggestions = async () => {
    const res = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const data = await res.json();
    setSearchSuggestion(data[1]);
    dispatch(
      searchAction.storeSuggestion({
        [searchQuery]: data[1],
      })
    );
  };
  useEffect(() => {
    //debouncing and cache logic
    const timer = setTimeout(() => {
      if (search[searchQuery]) {
        setSearchSuggestion(search[searchQuery]);
      } else {
        fetchSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  // -----------------------------------end-------

  //fetch data for search results
  const fetchSearchResults = async () => {
    const res = await fetch(SEARCH_BY_KEYWORD_API + searchQuery);
    const data = await res.json();
    dispatch(searchResultsAction.storeSearchResults(data.items));
  };

  const handleSearch = () => {
    if (searchQuery) navigate("/results?search_query=" + searchQuery);
    fetchSearchResults();
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setShowSuggestion(false);
      setTimeout(() => {setShowSuggestion(true)}, 1000)
    }
  };

  window.addEventListener("scroll", () => {
    setShowSuggestion(false);
  });

  return (
    <nav className="fixed w-full z-10 bg-white">
      <div className=" border-t-2 px-5 shadow-lg flex h-[60px] items-center justify-between">
        <div className=" flex items-center gap-6 text-3xl">
          <div onClick={handleToggleMenu} className=" cursor-pointer">
            {!isMenuOpen ? <AiOutlineMenu /> : <RxCross1 />}
          </div>
          <ImYoutube2
            onClick={() => navigate("/")}
            className=" text-7xl cursor-pointer"
          />
        </div>

        <div className=" hidden md:flex">
          <div
            className={` h-[30px] md:w-[400px] w-[300px]  md:flex hidden border items-center rounded-lg overflow-hidden `}
          >
            <input
              className=" w-[90%] focus:outline-none p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              onKeyUp={enterSearch}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() =>
                setTimeout(() => {
                  setShowSuggestion(false);
                }, 500)
              }
            />
            <button
              onClick={handleSearch}
              className=" w-[10%] pl-2 h-full text-2xl cursor-pointer bg-gray-200"
            >
              <AiOutlineSearch />
            </button>
          </div>

          {/* search suggestion */}
          {showSuggestion && (
            <ul
              onClose={() => setShowSuggestion(false)}
              className=" fixed bg-white w-96  shadow-md mt-8"
            >
              {searchSuggestion.map((item, index) => (
                <li
                  onClick={() => {
                    setSearchQuery(item);
                    handleSearch();
                    setShowSuggestion(false);
                  }}
                  className=" py-1 px-2 hover:bg-slate-200 cursor-pointer"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className=" text-4xl cursor-pointer flex items-center justify-between w-20 gap-6 ">
          <div
            className=" text-2xl md:hidden"
            onClick={() => setSearchBoxVisibility(!searchBoxVisibility)}
          >
            {searchBoxVisibility ? <RxCross1 /> : <AiOutlineSearch />}
          </div>
          <BiUserCircle />
        </div>
      </div>

      {/* for mobile  */}
      {searchBoxVisibility && (
        <div className=" mb-1">
          <div
            className={` h-[30px] md:hidden flex  border items-center rounded-lg overflow-hidden `}
            onSubmit={handleSearch}
          >
            <input
              className=" w-[80%] focus:outline-none p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              onKeyUp={enterSearch}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() =>
                setTimeout(() => {
                  setShowSuggestion(false);
                }, 500)
              }
            />
            <button
              onClick={handleSearch}
              className="w-[20%] pl-2 h-full text-2xl cursor-pointer bg-gray-200 flex justify-center items-center"
            >
              <AiOutlineSearch />
            </button>
          </div>

          {/* search suggestion for mobile users */}
          {showSuggestion && (
            <ul
              onClose={() => setShowSuggestion(false)}
              className=" fixed bg-white w-96  shadow-md mt-2 md:hidden"
            >
              {searchSuggestion.map((item, index) => (
                <li
                  onClick={() => {
                    setSearchQuery(item);
                    handleSearch();
                    setShowSuggestion(false);
                  }}
                  className=" py-1 px-2 hover:bg-slate-200 cursor-pointer"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
