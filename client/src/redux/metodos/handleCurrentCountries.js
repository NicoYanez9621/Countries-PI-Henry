import { filterByName } from "./filterByName";
import { filterByContinent } from "./filterByContinent";
import { filterByActivity } from "./filterByActivity";
import { order } from "./order";

export const handleCurrentCountries = (countries, payload) => {
  let currentCountries = countries;

  if (payload.byName.length > 0) {
    currentCountries = filterByName(currentCountries, payload.byName);
  }

  if (payload.byContinent.length > 0) {
    currentCountries = filterByContinent(currentCountries, payload.byContinent);
  }

  if (payload.byActivity.length > 0) {
    currentCountries = filterByActivity(currentCountries, payload.byActivity);
  }

  if (payload.orderBy.length > 0) {
    currentCountries = order(currentCountries, payload.orderBy);
  }
  return currentCountries;
};
