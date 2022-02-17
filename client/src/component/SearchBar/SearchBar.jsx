import React from "react";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={style.contenedor}>
      <input className={style.inputText} type="text" placeholder="Search..." />
      <input className={style.inputSubmit} type="submit" value="Search" />
    </div>
  );
};

export default SearchBar;
