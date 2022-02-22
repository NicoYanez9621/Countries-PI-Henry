import { Routes, Route } from "react-router-dom";
import style from "./App.module.scss";
import Welcome from "./component/Welcome/Welcome";
import ActivityCards from "./component/Cards/ActivityCards";
import Home from "./component/Home/Home";
import CountryCardDetail from "./component/CardDetail/CountryCardDetail";
import ActivityCreateForm from "./component/Form/ActivityCreateForm";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/:id" element={<CountryCardDetail />} />
        <Route path="/activities" element={<ActivityCards />} />
        <Route path="/activities/create" element={<ActivityCreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
