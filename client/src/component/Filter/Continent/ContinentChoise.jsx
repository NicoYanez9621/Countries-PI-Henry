import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../../../style/ContinentChoise.module.scss";

import { filter_countries } from "../../../redux/actions/index";

const ContinentChoise = () => {
  let filter_and_order = useSelector((state) => state.filtering_and_ordering);
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    let obj = {
      ...filter_and_order,
      byContinent: e.target.value,
    };
    dispatch(filter_countries(obj));
  };

  return (
    <div>
      <form className={style.container}>
        <div className={style.checkbox}>
          <input
            type="radio"
            className={style.hidden}
            name="continent"
            value="all"
            id="all"
            checked={
              filter_and_order.byContinent.includes("all") ? true : false
            }
            onChange={(e) => handleCheckbox(e)}
          />

          <label htmlFor="all">All</label>
          <div key={1}>
            <input
              type="radio"
              className={style.hidden}
              name="continent"
              value="Asia"
              id="Asia"
              onChange={(e) => handleCheckbox(e)}
              checked={
                filter_and_order.byContinent.includes("Asia") ? true : false
              }
            />
            <label htmlFor={"Asia"}>{"Asia"}</label>
          </div>
          <div key={2}>
            <input
              type="radio"
              className={style.hidden}
              name="continent"
              value="Americas"
              id="Americas"
              onChange={(e) => handleCheckbox(e)}
              checked={
                filter_and_order.byContinent.includes("Americas") ? true : false
              }
            />
            <label htmlFor={"Americas"}>{"Americas"}</label>
          </div>
          <div key={3}>
            <input
              type="radio"
              className={style.hidden}
              name="continent"
              value="Africa"
              id="Africa"
              onChange={(e) => handleCheckbox(e)}
              checked={
                filter_and_order.byContinent.includes("Africa") ? true : false
              }
            />
            <label htmlFor={"Africa"}>{"Africa"}</label>
          </div>
          <div key={4}>
            <input
              type="radio"
              className={style.hidden}
              name="continent"
              value="Europe"
              id="Europe"
              onChange={(e) => handleCheckbox(e)}
              checked={
                filter_and_order.byContinent.includes("Europe") ? true : false
              }
            />
            <label htmlFor={"Europe"}>{"Europe"}</label>
          </div>
          <div key={5}>
            <input
              type="radio"
              className={style.hidden}
              name="continent"
              value="Oceania"
              id="Oceania"
              onChange={(e) => handleCheckbox(e)}
              checked={
                filter_and_order.byContinent.includes("Oceania") ? true : false
              }
            />
            <label htmlFor={"Oceania"}>{"Oceania"}</label>
          </div>
          <div key={6}>
            <input
              type="radio"
              className={style.hidden}
              name="continent"
              value="Antarctic"
              id="Antarctic"
              onChange={(e) => handleCheckbox(e)}
              checked={
                filter_and_order.byContinent.includes("Antarctic")
                  ? true
                  : false
              }
            />
            <label htmlFor={"Antarctic"}>{"Antarctic"}</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContinentChoise;
