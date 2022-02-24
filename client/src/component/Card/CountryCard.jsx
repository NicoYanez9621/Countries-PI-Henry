import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/CountryCard.module.scss";

const CountryCard = ({ id, name, flag, continent }) => {
  return (
    <Link className={style.link} to={`/countries/${id}`}>
      <div className={style.contenedor}>
        <div className={style.flag}>
          <img src={flag} alt="img not found" />
        </div>
        <div className={style.info}>
          <h2>{name}</h2>
          <span>Continente: {continent}</span>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
