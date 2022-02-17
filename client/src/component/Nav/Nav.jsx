import React from "react";
import style from "./Nav.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={style.contenedor}>
      <Link className={style.link} to={`/countries`}>
        <span>Countries</span>
      </Link>
      <Link className={style.link} to={`/activities`}>
        <span>Activities</span>
      </Link>

      <SearchBar className={style.searchBar} />
    </div>
  );
};

export default Nav;
