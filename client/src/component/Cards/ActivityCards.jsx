import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_activities } from "../../redux/actions";
import ActivitiesCard from "../Card/ActivitiesCard";
import Nav from "../Nav/Nav";
import style from "../../style/ActivityCards.module.scss";

const ActivityCards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_activities());
  }, [dispatch]);
  let activities = useSelector((state) => state.activities);

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

  var min = 0;
  var max = 8;
  var array = [];
  for (let i = 1; i <= activities.length / 10 + 1; i++) {
    let page = "page";
    page += i;
    page = activities.slice(min, max);
    min += 8;
    max += 8;

    array.push(page);
  }
  console.log(array[state.paginaActual]);
  for (let i = array.length - 1; i > 0; i--) {
    if (!array[i].length) {
      array.pop();
    }
  }

  return (
    <div className={style.contenedor}>
      <Nav name="🏠 Home" />

      <div className={style.contenedorGral}>
        <div className={style.paginado}>
          <button onClick={handlerPrev} value={1}>
            ⏮ Previous
          </button>
          <h2 className={style.span}>{state.paginaActual}</h2>
          <button onClick={handlerNext} value={1}>
            Next ⏭
          </button>
        </div>

        <div className={style.contenido}>
          {/*  <ActivitiesChoise /> */}
          {array[state.paginaActual].length > 0 ? (
            array[state.paginaActual].map((a) => (
              <ActivitiesCard
                key={a.id}
                name={a.name}
                difficulty={a.difficulty}
                duration={a.duration}
                season={a.season}
              />
            ))
          ) : (
            <p>No hay actividades</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;
