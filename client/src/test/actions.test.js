import { search_countries, SEARCH_COUNTRIES } from "../redux/actions/index";

describe("Action Creatos", () => {
  it("Deberia existir mi action type:FILTER_GENDER y payload su valor lo recibe por argumento", () => {
    expect(search_countries("data")).toEqual({
      type: SEARCH_COUNTRIES,
      payload: "data",
    });
  });
});
