import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_NAME,
  GET_ACTIVITIES,
  SEARCH_COUNTRIES,
  FILTER_COUNTRIES,
  ORDER_COUNTRIES,
} from "../actions/index";

import { filterByName } from "../metodos/filterByName";
import { order } from "../metodos/order";
import { filterByActivity } from "../metodos/filterByActivity";
import { handleCurrentCountries } from "../metodos/handleCurrentCountries";

const initialstate = {
  activities: [],

  countries: [],
  countryById: {},
  currentCountries: [],
  searchCountries: [],

  filtering_and_ordering: {
    byName: "",
    byContinent: "all",
    orderBy: "",
    byActivity: "",
  },
};

const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: [...payload],
        currentCountries: [...payload],
        searchCountries: payload,
      };
    }

    case GET_COUNTRY_BY_ID: {
      return {
        ...state,
        countryById: payload,
      };
    }

    case GET_COUNTRY_NAME: {
      let currentCountries = payload.data;

      if (payload.filtering_and_ordering.byActivity.length > 0) {
        currentCountries = filterByActivity(
          currentCountries,
          payload.byActivity
        );
      }

      if (payload.filtering_and_ordering.orderBy.length > 0) {
        currentCountries = order(currentCountries, payload.orderBy);
      }

      return {
        ...state,
        filtering_and_ordering: payload.filtering_and_ordering,
        currentCountries: currentCountries,
      };
    }

    case GET_ACTIVITIES: {
      return {
        ...state,
        activities: [...payload],
      };
    }

    case ORDER_COUNTRIES: {
      let ordered = handleCurrentCountries(state.countries, payload);
      return {
        ...state,
        filtering_and_ordering: payload,
        currentCountries: ordered,
      };
    }

    case SEARCH_COUNTRIES: {
      let filtered = filterByName(state.countries, payload);
      return {
        ...state,
        searchCountries: filtered,
      };
    }

    case FILTER_COUNTRIES: {
      let filtered = handleCurrentCountries(state.countries, payload);

      return {
        ...state,
        filtering_and_ordering: payload,
        currentCountries: filtered,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
