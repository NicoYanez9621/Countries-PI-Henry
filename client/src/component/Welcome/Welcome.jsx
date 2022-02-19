import React from "react";
import { Link } from "react-router-dom";
import style from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link className={style.link} to={`/home`}>
        Continuar
      </Link>
    </div>
  );
};

export default Welcome;
