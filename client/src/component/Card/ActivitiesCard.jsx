import React from "react";
import style from "../../style/ActivitiesCard.module.scss";

const ActivitiesCard = ({ name, difficulty, duration, season }) => {
  return (
    <div className={style.contenedor}>
      <h4>{name}</h4>
      <span>Difficulty: {difficulty}</span>
      <span>Duration: {duration}</span>
      <span>Season:</span>
      {season.map((s) => (
        <li>{s}</li>
      ))}
    </div>
  );
};

export default ActivitiesCard;
