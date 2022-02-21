import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  GET_COUNTRY_NAME,
  SEARCH_COUNTRIES,
} from "../actions/index";

import { filterByName } from "../metodos/filterByName";

const initialstate = {
  countries: [],
  country: [],
  activities: [],

  searchCountries: [],
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
    case GET_COUNTRY_NAME: {
      return {
        ...state,
        country: [...payload],
      };
    }
    case SEARCH_COUNTRIES: {
      let filtered = filterByName(state.countries, payload);
      return {
        ...state,
        searchCountries: filtered,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
