import React from "react";
import style from "./CountryCard.module.scss";

const CountryCard = ({ name, flag, area, continent, population }) => {
  return (
    <div className={style.contenedor}>
      <div className={style.flag}>
        <img src={flag} alt="img not found" />
      </div>
      <div className={style.info}>
        <h2>{name}</h2>
        <span>Continente: {continent}</span>
      </div>
    </div>
  );
};

export default CountryCard;
