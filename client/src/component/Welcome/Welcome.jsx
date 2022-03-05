import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={style.loginBox}>
      <h1>Welcome to Countries-App</h1>
      <form>
        <Link to={`/home`}>
          <a href="/home">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Continue Home
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Welcome;
