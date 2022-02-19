import { GET_COUNTRIES, GET_ACTIVITIES } from "../actions/index";

const initialstate = {
  countries: [],
  activities: [],
};

const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: [...payload],
      };
    }
    case GET_ACTIVITIES: {
      return {
        ...state,
        activities: [...payload],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
