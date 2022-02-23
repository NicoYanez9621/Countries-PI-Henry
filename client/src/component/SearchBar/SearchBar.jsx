import React from "react";
import style from "./SearchBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { get_country_name } from "../../redux/actions/index";

const SearchBar = () => {
  const dispatch = useDispatch();
  let filter_and_order = useSelector((state) => state.filtering_and_ordering);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...filter_and_order,
      byName: e.target.name.value,
    };
    dispatch(get_country_name(obj));
  };

  return (
    <div className={style.contenedor}>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          className={style.inputText}
          type="text"
          placeholder="Search Country..."
        />
        <input className={style.inputSubmit} type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
