//import { get_countries } from "./redux/reducer/index";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CountryCards from "./component/Cards/CountryCards";
import Nav from "./component/Nav/Nav";
import { useDispatch } from "react-redux";
import { get_countries } from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_countries());
  }, [dispatch]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/countries" element={<CountryCards />} />
      </Routes>
    </>
  );
}

export default App;
