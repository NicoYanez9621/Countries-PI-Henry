import React, { useEffect } from "react";
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

  return (
    <div className={style.contenedor}>
      <Nav name="🏠 Home" />

      <div className={style.contenido}>
        {/*  <ActivitiesChoise /> */}
        {activities?.map((a) => (
          <ActivitiesCard
            key={a.id}
            name={a.name}
            difficulty={a.difficulty}
            duration={a.duration}
            season={a.season}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;
