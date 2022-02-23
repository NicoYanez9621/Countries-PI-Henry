import React from "react";
import style from "./ActivitiesChoise.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filter_countries } from "../../../redux/actions";

const ActivitiesChoise = () => {
  let activities = useSelector((state) => state.activities);
  let filter_and_order = useSelector((state) => state.filtering_and_ordering);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    let obj = {
      ...filter_and_order,
      byActivity: e.target.value,
    };
    dispatch(filter_countries(obj));
  };

  return (
    <div className={style.container}>
      <label htmlFor="byActivity">Filter by Activity:</label>
      <select
        className={style.mainSelect}
        id="byActivity"
        onChange={(e) => handleSelect(e)}
        name="byActivity"
        defaultValue={filter_and_order.byActivity}
      >
        <option value="all">All</option>
        {activities.map((activity, index) => {
          return (
            <option key={index} value={activity}>
              {activity}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ActivitiesChoise;
