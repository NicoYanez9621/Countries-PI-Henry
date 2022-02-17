import React from "react";
import style from "./CountryCard.module.scss";

const CountryCard = ({
  name,
  flag,
  area,
  continent,
  population,
  TouristActivities,
}) => {
  return (
    <div className={style.contenedor}>
      <div className={style.flag}>
        <img src={flag} alt="img not found" />
      </div>
      <div className={style.info}>
        <h2>{name}</h2>
        <span>Area: {area}</span>
        <span>Continente: {continent}</span>
        <span>Poblacion: {population}</span>
      </div>
    </div>
  );
};

export default CountryCard;
