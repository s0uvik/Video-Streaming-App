import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../utils/store/menuToggleSlice";
import {
  SEARCH_BY_KEYWORD_API,
  SEARCH_SUGGESTIONS_API,
} from "../utils/constant";
import { searchAction } from "../utils/store/searchSlice";
import { searchResultsAction } from "../utils/store/searchResultsSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleAction.toggleMenu());
    console.log("toggle menu");
  };

  const search = useSelector((state) => state.search);

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



  // fetch data by search keyword----start
  const fetchSearchResults = async () => {
    const res = await fetch(SEARCH_BY_KEYWORD_API + searchQuery);
    const data = await res.json();
    setSearchResults(data.items);
    dispatch(searchResultsAction.storeSearchResults(data.items));
    console.log(data.items);
  };
  const handleSearch = (e) => {
    e?.preventDefault();
    console.log("first")
    fetchSearchResults();
    if (searchQuery) navigate("/search");
  };
  // --------------------end----------------
  // useEffect(() => handleSearch(), [])

  return (
    <nav className=" px-5 shadow-lg flex h-[60px] items-center justify-between">
      <div className=" flex items-center gap-6 text-3xl">
        <AiOutlineMenu onClick={handleToggleMenu} className=" cursor-pointer" />
        <ImYoutube2 onClick={() => navigate("/")} className=" text-7xl cursor-pointer" />
      </div>

      <div>
        <form
          onSubmit={handleSearch}
          className=" h-[30px] w-[400px] flex border items-center rounded-lg overflow-hidden"
        >
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className=" w-[90%] focus:outline-none p-2"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button
            type="submit"
            className=" w-[10%] pl-2 h-full text-2xl cursor-pointer bg-gray-200"
          >
            <AiOutlineSearch />
          </button>
        </form>
      
      {/* search suggestion */}
        {showSuggestion && (
          <ul className=" fixed bg-white w-96  shadow-md rounded-md">
            {searchSuggestion.map((item, index) => (
              <li onClick={() => {
                setSearchQuery(item)
                setShowSuggestion(false)
                handleSearch()
              }
                } className=" py-1 px-2 hover:bg-slate-200" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}

      </div>
      <div className=" text-4xl cursor-pointer">
        <BiUserCircle />
      </div>
    </nav>
  );
};

export default Header;
