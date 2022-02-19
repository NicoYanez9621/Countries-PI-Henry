import CountryCard from "../Card/CountryCard";
import style from "./CountryCards.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get_countries } from "../../redux/actions/index";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CountryCards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_countries());
  }, [dispatch]);
  let countries = useSelector((state) => state.countries);
  return (
    <Link className={style.link} to={`/countries/:idCountry`}>
      <div className={style.contenedor}>
        {countries?.map((c) => (
          <CountryCard
            key={c.id}
            name={c.name}
            flag={c.flag}
            continent={c.continent}
          />
        ))}
      </div>
    </Link>
  );
};

export default CountryCards;
