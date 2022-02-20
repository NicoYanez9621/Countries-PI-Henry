import React from "react";
import Nav from "../Nav/Nav";
import style from "./ActivityCreate.module.scss";

const ActivityCreateForm = () => {
  return (
    <div className={style.contenedor}>
      <Nav />
      <div className={style.form}>
        <h1>Create Activity</h1>
        <form>
          <input
            type="text"
            className={style.controls}
            name=""
            id=""
            placeholder="Nombre de la actividad a crear"
          />
          <input
            type="text"
            className={style.controls}
            name=""
            id=""
            placeholder="Dificultad de la actividad"
          />
          <input
            type="text"
            className={style.controls}
            name=""
            id=""
            placeholder="Duracion de la actividad"
          />
          <input
            type="text"
            className={style.controls}
            name=""
            id=""
            placeholder="Estacion en la que se realiza la actividad"
          />
          <input
            type="text"
            className={style.controls}
            name=""
            id=""
            placeholder="Pais/es donde se encuentra la actividad"
          />
          <input type="submit" className={style.botons} value="Create" />
        </form>
      </div>
    </div>
  );
};

export default ActivityCreateForm;
