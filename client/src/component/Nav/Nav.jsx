import React from "react";
import style from "../../style/Nav.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ name }) => {
  return (
    <div className={style.contenedor}>
      <Link className={style.link} to={`/home`}>
        <span>{name}</span>
      </Link>
      <Link className={style.link} to={`/activities`}>
        <span>🏕 Activities</span>
      </Link>
      <Link className={style.link} to={`/activities/create`}>
        <span>🆕 New Activity </span>
      </Link>

      <SearchBar className={style.searchBar} />
    </div>
  );
};

export default Nav;
