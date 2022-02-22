import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";

export const get_countries = () => async (dispatch) => {
  try {
    let countries = await axios.get(`http://localhost:3001/countries`);
    return dispatch({
      type: GET_COUNTRIES,
      payload: countries.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCountryById = (id) => async (dispatch) => {
  try {
    let response = await axios.get(`http://localhost:3001/countries/${id}`);
    return dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const get_country_name =
  (filtering_and_ordering) => async (dispatch) => {
    try {
      let { data } = await axios.get(
        `http://localhost:3001/countries?name=${filtering_and_ordering.byName}`
      );
      console.log("Respuesta: ", data);
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: { data, filtering_and_ordering },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const get_activities = () => async (dispatch) => {
  try {
    let activities = await axios.get(`http://localhost:3001/activity`);
    return dispatch({
      type: GET_ACTIVITIES,
      payload: activities.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const save_activity = (data) => async (dispatch) => {
  console.log("Data enviada:", data);
  try {
    await axios.post("http://localhost:3001/activity", data);
  } catch (e) {
    console.log(e);
  }
};

export const search_countries = (data) => {
  return { type: SEARCH_COUNTRIES, payload: data };
};
