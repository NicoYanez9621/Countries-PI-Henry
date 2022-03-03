import CountryCard from "../Card/CountryCard";
import style from "../../style/CountryCards.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get_countries } from "../../redux/actions/index";
import React, { useEffect, useState } from "react";

const CountryCards = () => {
  let countries = useSelector((state) => state.currentCountries);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_countries());
  }, [dispatch]);

  const [state, setState] = useState({
    paginaActual: 0,
  });

  const handlerPrev = (e) => {
    if (state.paginaActual !== 0) {
      setState({
        paginaActual: parseInt(state.paginaActual) - parseInt(e.target.value),
      });
    }
  };

  const handlerNext = (e) => {
    if (state.paginaActual !== array.length - 1) {
      setState({
        paginaActual: parseInt(state.paginaActual) + parseInt(e.target.value),
      });
    }
  };

  var min = 9;
  var max = 19;
  var array = [];
  for (let i = 1; i <= countries.length / 10 + 1; i++) {
    let page = "page";
    page += i;
    if (page === "page1") {
      page = countries.slice(0, 9);
    } else {
      page = countries.slice(min, max);
      min = min + 10;
      max = max + 10;
    }
    array.push(page);
  }
  console.log(array[state.paginaActual]);
  for (let i = array.length - 1; i > 0; i--) {
    if (!array[i].length) {
      array.pop();
    }
  }

  return (
    <div className={style.contenedorGral}>
      <button onClick={handlerPrev} value={1}>
        ⏮ Previous
      </button>
      <span className={style.span}>{state.paginaActual}</span>
      <button onClick={handlerNext} value={1}>
        Next ⏭
      </button>
      <div className={style.contenedor}>
        {array[state.paginaActual].length > 0 ? (
          array[state.paginaActual].map((c) => (
            <CountryCard
              key={c.id}
              id={c.id}
              name={c.name}
              flag={c.flag}
              continent={c.continent}
            />
          ))
        ) : (
          <p>No se encontro coincidencia</p>
        )}
      </div>
    </div>
  );
};

export default CountryCards;
