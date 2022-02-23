import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./ContinentChoise.module.scss";

import { filter_countries } from "../../../redux/actions/index";

const ContinentChoise = () => {
  let continent = useSelector((state) => state.continents);
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
          {continent.map((continent, index) => (
            <div key={index}>
              <input
                type="radio"
                className={style.hidden}
                name="continent"
                value={continent}
                id={continent}
                onChange={(e) => handleCheckbox(e)}
                checked={
                  filter_and_order.byContinent.includes(continent)
                    ? true
                    : false
                }
              />
              <label htmlFor={continent}>{continent}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ContinentChoise;
