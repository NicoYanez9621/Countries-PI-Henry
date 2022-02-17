import React from "react";
import CountryCard from "../Card/CountryCard";
import style from "./CountryCards.module.scss";
import { useSelector } from "react-redux";

const CountryCards = () => {
  let countries = useSelector((state) => state.countries);
  return (
    <div className={style.contenedor}>
      {countries?.map((c) => (
        <CountryCard
          key={c.id}
          name={c.name}
          flag={c.flag}
          continent={c.continent}
          area={c.area}
          population={c.population}
        />
      ))}
    </div>
  );
};

export default CountryCards;
