import React from "react";
import { useSelector } from "react-redux";
import styles from "./SelectedCountries.module.scss";
import { Validate } from "../validations/ActivityCreate";

const SelectedCountries = ({ formData, setFormData, errors, setErrors }) => {
  let countries = useSelector((state) => state.countries);

  const removeFromCountries = (id) => {
    let newCountries = formData.countriesId;
    newCountries.splice(newCountries.indexOf(id), 1);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        countriesId: newCountries,
      };
    });
    setErrors(Validate(formData));
  };

  return (
    <div className={styles.contenedor}>
      <p>Selected countries:</p>
      <ul className={styles.selectedCountries}>
        {formData.countriesId.length > 0
          ? formData.countriesId.map((id) => {
              let country = countries.find((e) => e.id === id);
              return (
                <li key={id}>
                  {country.name}
                  <span onClick={(id) => removeFromCountries(id)}>X</span>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default SelectedCountries;
