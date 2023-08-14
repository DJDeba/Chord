import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const SearchBar = () => {
  const [{ searchTerm }, dispatch] = useStateValue();

  const setSearchTerm = (value) => {
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      searchTerm: value,
    });
  };


  return (
    <div className="flex items-center justify-center absolute top-0 w-full h-full">
      <div className="bg-black bg-opacity-50 rounded-full p-2 flex items-center">
      <IoSearch className="text-2xl text-textColor" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none bg-transparent w-full p-2 focus:outline-none placeholder-white text-headingColor"
        />
      </div>
    </div>
  );
}

export default SearchBar;
