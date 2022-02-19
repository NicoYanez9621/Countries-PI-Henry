import React from "react";
import CountryCards from "../Cards/CountryCards";
import Filter from "../Filter/Filter";
import Nav from "../Nav/Nav";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.contenedor}>
      <Nav />
      <div className={style.contenido}>
        <Filter className={style.filter} />

        <div className={style.cards}>
          <CountryCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
