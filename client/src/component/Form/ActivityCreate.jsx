import React from "react";
import Nav from "../Nav/Nav";
import style from "./ActivityCreate.module.scss";

const ActivityCreateForm = () => {
  return (
    <div className={style.contenedor}>
      <Nav />
      <div className={style.form}>
        <h1>Create Activity</h1>
      </div>
    </div>
  );
};

export default ActivityCreateForm;
