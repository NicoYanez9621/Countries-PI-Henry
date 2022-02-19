import React from "react";
import style from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={style.contenedor}>
      <h1>Filter</h1>
      <span>Orden Alfabetico</span>
      <span>Orden A-Z</span>
      <span>Orden Z-A</span>
    </div>
  );
};

export default Filter;
