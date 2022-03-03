import React, { useState } from "react";
import style from "../../style/SearchBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filter_countries, get_country_name } from "../../redux/actions/index";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  let filter_and_order = useSelector((state) => state.filtering_and_ordering);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      ...filter_and_order,
      byName: input,
    };
    await dispatch(get_country_name(obj));
    dispatch(filter_countries(obj));
  };

  const onChange = async (e) => {
    e.preventDefault();
    setInput(e.target.value);
    await dispatch(get_country_name({ ...filter_and_order, byName: input }));
    dispatch(filter_countries({ ...filter_and_order, byName: input }));
  };
  return (
    <div className={style.contenedor}>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          autoComplete="off"
          name="name"
          className={style.inputText}
          type="onSubmit"
          placeholder="Search Country by name..."
          value={input}
          onChange={(e) => onChange(e)}
        />
        <input className={style.inputSubmit} type="submit" value="Search 🔍" />
      </form>
    </div>
  );
};

export default SearchBar;
