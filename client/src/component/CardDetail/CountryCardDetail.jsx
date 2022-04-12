import React from "react";
import style from "../../style/CountryCardDetail.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCountryById, get_country_limpiar } from "../../redux/actions";
import Nav from "../Nav/Nav";

const CountryCardDetail = () => {
  const { id } = useParams();
  let countryById = useSelector((state) => state.countryById);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryById(id));
    return () => {
      dispatch(get_country_limpiar());
    };
  }, []);
  console.log(countryById);

  return (
    <div className={style.contenedor}>
      <Nav name="👈 Volver a Home" />
      <div className={style.contenido}>
        <div className={style.siderbarTexts}>
          <h1>{countryById.name}</h1>
          <h2>Capital: {countryById.capital}</h2>
        </div>

        <img className={style.img} src={countryById.flag} alt="img not found" />
        <span>Code: {countryById.code}</span>
        <span>Continent: {countryById.continent}</span>

        <span>SubRegion: {countryById.subregion}</span>
        <span>Area: {countryById.area}</span>
        <span>Population: {countryById.population}</span>
        <span>
          Tourisct Activities:
          {countryById.TouristActivities &&
            countryById.TouristActivities.map((t) => (
              <li key={t.id}>{t.name}</li>
            ))}
        </span>
      </div>
    </div>
  );
};

export default CountryCardDetail;
