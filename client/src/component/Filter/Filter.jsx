import React from "react";
import style from "./Filter.module.scss";
import OrderBy from "./OrderBy/OrderBy";

const Filter = () => {
  return (
    <div className={style.contenedor}>
      <h1>Filter</h1>
      <OrderBy />
    </div>
  );
};

export default Filter;
