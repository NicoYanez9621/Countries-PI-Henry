import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

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
