import React from "react";
import ContinentChoise from "./Continent/ContinentChoise";
import ActivitiesChoise from "./Activities/ActivitiesChoise";
import style from "../../style/Filter.module.scss";
import OrderBy from "./OrderBy/OrderBy";

const Filter = () => {
  return (
    <div className={style.contenedor}>
      <h1>Filter</h1>
      <OrderBy />
      <ActivitiesChoise />
      <ContinentChoise />
    </div>
  );
};

export default Filter;
