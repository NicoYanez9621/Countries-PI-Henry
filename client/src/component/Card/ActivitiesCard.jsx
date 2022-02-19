import React from "react";
import style from "./ActivitiesCard.module.scss";

const ActivitiesCard = ({ name, difficulty, duration, season }) => {
  return (
    <div className={style.contenedor}>
      <h2>{name}</h2>
      <span>Difficulty: {difficulty}</span>
      <span>Duration: {duration}</span>
      <span>Season: {season}</span>
    </div>
  );
};

export default ActivitiesCard;