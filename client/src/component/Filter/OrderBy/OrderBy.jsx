import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { order_countries } from "../../../redux/actions";
import style from "../../../style/OrderBy.module.scss";

const OrderBy = () => {
  const dispatch = useDispatch();
  let filter_and_order = useSelector((state) => state.filtering_and_ordering);

  const handleOrderByFilter = (e) => {
    let obj = {
      ...filter_and_order,
      orderBy: e.target.value,
    };
    dispatch(order_countries(obj));
  };

  return (
    <div className={style.container}>
      <label htmlFor="orderBy">Order By:</label>
      <select
        data-testid="select-input"
        className={style.mainSelect}
        id="orderBy"
        onChange={(e) => handleOrderByFilter(e)}
        name="orderBy"
        defaultValue={filter_and_order.orderBy}
      >
        <option value="all">Select...</option>
        <option value="asc">From A-Z</option>
        <option value="dsc">From Z-A</option>
        <option value="hp">Higher population</option>
        <option value="sp">Smaller population</option>
      </select>
    </div>
  );
};

export default OrderBy;
