import React, { useState } from "react";
import style from "../../style/Nav.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { UilBars } from "@iconscout/react-unicons";

const Nav = ({ name }) => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <div className={showMenu ? style.navShow : style.nav}>
      <div className={style.topNav}>
        <SearchBar className={style.logo} />
        {showMenu ? (
          <CgClose
            onClick={() => setShowMenu(!showMenu)}
            className={style.iconClose}
          />
        ) : (
          <UilBars
            onClick={() => setShowMenu(!showMenu)}
            className={style.icon}
          />
        )}
      </div>
      <div>
        <div className={showMenu ? style.showMenu : style.buttonsContainer}>
          <Link
            onClick={closeMenu}
            className={style.navButton}
            to={`/home`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            activeClass="active"
          >
            <span className={style.spanText}>{name}</span>
          </Link>
          <Link
            className={style.navButton}
            to={`/activities`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            activeClass="active"
          >
            <span className={style.spanText}>🏕 Activities</span>
          </Link>
          <Link
            className={style.navButton}
            to={`/activities/create`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            activeClass="active"
          >
            <span className={style.spanText}>🆕 New Activity </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
