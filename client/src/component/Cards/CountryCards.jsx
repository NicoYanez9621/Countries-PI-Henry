import CountryCard from "../Card/CountryCard";
import style from "../../style/CountryCards.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get_countries } from "../../redux/actions/index";
import React, { useEffect, useState } from "react";

const CountryCards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_countries());
  }, [dispatch]);

  let countries = useSelector((state) => state.currentCountries);

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
    if (state.paginaActual !== final.length - 1) {
      setState({
        paginaActual: parseInt(state.paginaActual) + parseInt(e.target.value),
      });
    }
  };

  let page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16,
    page17,
    page18,
    page19,
    page20,
    page21,
    page22,
    page23,
    page24,
    page25,
    page26;

  page1 = countries.slice(0, 9);
  page2 = countries.slice(9, 19);
  page3 = countries.slice(19, 29);
  page4 = countries.slice(29, 39);
  page5 = countries.slice(39, 49);
  page6 = countries.slice(49, 59);
  page7 = countries.slice(59, 69);
  page8 = countries.slice(69, 79);
  page9 = countries.slice(79, 89);
  page10 = countries.slice(89, 99);
  page11 = countries.slice(99, 109);
  page12 = countries.slice(109, 119);
  page13 = countries.slice(119, 129);
  page14 = countries.slice(129, 139);
  page15 = countries.slice(139, 149);
  page16 = countries.slice(149, 159);
  page17 = countries.slice(159, 169);
  page18 = countries.slice(169, 179);
  page19 = countries.slice(179, 189);
  page20 = countries.slice(189, 199);
  page21 = countries.slice(199, 209);
  page22 = countries.slice(209, 219);
  page23 = countries.slice(219, 229);
  page24 = countries.slice(229, 239);
  page25 = countries.slice(239, 249);
  page26 = countries.slice(249, 250);

  let final = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16,
    page17,
    page18,
    page19,
    page20,
    page21,
    page22,
    page23,
    page24,
    page25,
    page26,
  ];

  for (let i = final.length - 1; i > 0; i--) {
    if (!final[i].length) {
      final.pop();
    }
  }
  return (
    <div className={style.contenedorGral}>
      <button onClick={handlerPrev} value={1}>
        Anterior
      </button>
      <span className={style.span}>{state.paginaActual}</span>
      <button onClick={handlerNext} value={1}>
        Siguiente
      </button>
      <div className={style.contenedor}>
        {final[state.paginaActual].length > 0 ? (
          final[state.paginaActual].map((c) => (
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
