import React from "react";
import classes from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { action } from "../../../store/noteData";
function SearchBar() {
  const dispatch = useDispatch();
  const searchHanlder = (e) => {
    const searchText = e.target.value;
    dispatch(action.searchNote(`${searchText}`));
  };
  return (
    <div className={classes["search-bar"]}>
      <div className={classes.search_icon}>
        <FiSearch />
      </div>
      <input type="text" onChange={searchHanlder} placeholder="Search" />
    </div>
  );
}

export default SearchBar;
