import React from "react";
import classes from "./index.module.css";

const SearchButton = () => {
  return (
    <div className="relative mt-[48px]">
      <button className={classes.searchButton}>Ieškoti</button>
      <img
        src="./icons/search_icon.png"
        height={24}
        width={24}
        className={classes.searchIcon}
      />
    </div>
  );
};

export default SearchButton;
