import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";

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
