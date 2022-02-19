import React from "react";
import { Link } from "react-router-dom";
import style from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={style.loginBox}>
      <h1>Welcome to Countries-App</h1>
      <form>
        <Link to={`/home`}>
          <a href="http://localhost:3000/home">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Continue
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Welcome;
