import React, { useState, useMemo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Validate } from "./validations/ActivityCreate";
import { save_activity } from "../../redux/actions/index";
import Nav from "../Nav/Nav";
import style from "./ActivityCreateForm.module.scss";
import SearchCountry from "./SearchCountry/SearchCountry";
import SelectedCountries from "./SelectedCountry/SelectedCountries";

const ActivityCreateForm = () => {
  const [formatData, setFormatData] = useState({
    name: " ",
    difficulty: "none",
    duration: "none",
    season: [],
    countriesId: [],
  });
  const [error, setError] = useState({});
  useEffect(() => {});
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    let season = formatData.season;
    if (e.target.checked === true) {
      season.push(e.target.value);
    } else {
      season.splice(season.indexOf(e.target.value), 1);
    }
    setFormatData({
      ...formatData,
      season: season,
    });
    setError(Validate(formatData));
  };

  const handleInputChange = (e) => {
    var value = e.target.value;
    var name = e.target.name;

    setFormatData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
    setError(Validate({ ...formatData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      formatData.name &&
      formatData.difficulty &&
      formatData.duration &&
      formatData.season &&
      formatData.countriesId
    ) {
      dispatch(save_activity(formatData));
      alert("Activity created successfully");
      setFormatData({
        name: " ",
        difficulty: "none",
        duration: "none",
        season: [],
        countriesId: [],
      });
    }
  };

  const disabeledSubmit = useMemo(() => {
    if (
      error.name ||
      error.difficulty ||
      error.duration ||
      error.season ||
      error.countriesId
    )
      return true;
    return false;
  }, [error]);

  return (
    <div className={style.contenedor}>
      <Nav />
      <div className={style.form}>
        <h2>Create Activity</h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className={style.group}>
            <input
              type="text"
              className={style.input}
              name="name"
              id="name"
              placeholder="Activity Name"
              onChange={(e) => handleInputChange(e)}
            />
            {error.name && <p className={style.error}>{error.name}</p>}
          </div>

          <div className={style.groupTwo}>
            <label htmlFor="difficulty">Difficulty:</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formatData.difficulty}
              onChange={(e) => handleInputChange(e)}
              className={style.mainSelect}
            >
              <option value="none">Select an option...</option>
              <option value="1">very easy</option>
              <option value="2">easy</option>
              <option value="3">medium</option>
              <option value="4">hard</option>
              <option value="5">very hard</option>
            </select>
            {error.difficulty && (
              <p className={style.error}>{error.difficulty}</p>
            )}
          </div>

          <div className={style.group}>
            <label htmlFor="duration">Duration:</label>
            <select
              id="duration"
              value={formatData.duration}
              name="duration"
              onChange={(e) => handleInputChange(e)}
              className={style.mainSelect}
            >
              <option value="none">Select an option...</option>
              <option value="1 dia">1 día</option>
              <option value="2 dias">2 días</option>
              <option value="3 dias">3 días</option>
            </select>
            {error.duration && <p className={style.error}>{error.duration}</p>}
          </div>

          <p>
            Please choose the season (as) in which this activity is practiced
          </p>
          <div className={style.groupTwo}>
            <div className={style.season}>
              <label htmlFor="summer">Summer</label>
              <input
                type="checkbox"
                value="summer"
                name="season"
                onChange={(e) => handleCheck(e)}
                checked={formatData.season.includes("summer") ? true : false}
              />
            </div>
            <div className={style.season}>
              <label htmlFor="winter">Winter</label>
              <input
                type="checkbox"
                value="winter"
                name="season"
                onChange={(e) => handleCheck(e)}
                checked={formatData.season.includes("winter") ? true : false}
              />
            </div>
            <div className={style.season}>
              <label htmlFor="fall">Fall</label>
              <input
                type="checkbox"
                value="fall"
                name="season"
                onChange={(e) => handleCheck(e)}
                checked={formatData.season.includes("fall") ? true : false}
              />
            </div>
            <div className={style.season}>
              <label htmlFor="spring">Spring</label>
              <input
                type="checkbox"
                value="spring"
                name="season"
                onChange={(e) => handleCheck(e)}
                checked={formatData.season.includes("spring") ? true : false}
              />
            </div>
          </div>
          {error.season && <p className={style.error}>{error.season}</p>}

          <div className={style.countrySearch}>
            <SearchCountry
              formData={formatData}
              setFormData={setFormatData}
              errors={error}
              setErrors={setError}
            />
            <SelectedCountries
              formData={formatData}
              setFormData={setFormatData}
              errors={error}
              setErrors={setError}
            />
            {error.countriesId && (
              <p className={style.error}>{error.countriesId}</p>
            )}
          </div>

          <input
            type="submit"
            className={style.botons}
            disabled={disabeledSubmit}
            value="Create"
          />
        </form>
      </div>
    </div>
  );
};

export default ActivityCreateForm;
