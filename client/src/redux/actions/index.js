import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";
export const ORDER_COUNTRIES = "ORDER_COUNTRIES";
export const GET_COUNTRY_LIMPIAR = "GET_COUNTRY_LIMPIAR";

export const get_countries = () => async (dispatch) => {
  try {
    let countries = await axios.get(`/countries`);
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
    let response = await axios.get(`/countries/${id}`);
    return dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const get_country_name =
  (filtering_and_ordering) => async (dispatch) => {
    try {
      let { data } = await axios.get(
        `/countries?name=${filtering_and_ordering.byName}`
      );
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
    let activities = await axios.get(`/activity`);
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
    await axios.post("/activity", data);
  } catch (e) {
    console.log(e);
  }
};

/**********************************************************/
/**********************************************************/
/**********************************************************/

export const search_countries = (data) => {
  return { type: SEARCH_COUNTRIES, payload: data };
};

export const filter_countries = (data) => {
  return { type: FILTER_COUNTRIES, payload: data };
};

export const order_countries = (data) => {
  return { type: ORDER_COUNTRIES, payload: data };
};

export const get_country_limpiar = () => {
  return { type: GET_COUNTRY_LIMPIAR };
};
