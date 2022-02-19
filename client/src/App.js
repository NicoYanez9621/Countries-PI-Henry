import { Routes, Route } from "react-router-dom";
import style from "./App.module.scss";
import Welcome from "./component/Welcome/Welcome";
import ActivityCards from "./component/Cards/ActivityCards";
import ActivityCreate from "./component/Form/ActivityCreate";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<ActivityCards />} />
        <Route path="/activities/create" element={<ActivityCreate />} />
      </Routes>
    </div>
  );
}

export default App;
