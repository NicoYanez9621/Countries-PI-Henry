import { GET_COUNTRIES } from "../actions/index";

const initialstate = {
  countries: [],
};

const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: [...payload],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
