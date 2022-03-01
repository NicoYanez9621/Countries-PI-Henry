const axios = require("axios");
const { Country, TouristActivity } = require("../../db");

const get_Countries = async (req, res) => {
  const { name } = req.query;
  let getCountry = async () => {
    let countriesDb = await Country.findAll({
      include: TouristActivity,
    });
    return countriesDb;
  };

  let countries = getCountry();
  //console.log(countries);
  countries.then((r) => {
    if (r.length > 0) {
      if (name) {
        let countryFiltrado = r.filter((e) =>
          e.name.toLowerCase().includes(name.toLowerCase())
        );
        if (countryFiltrado.length > 0) {
          return res.json(countryFiltrado);
        } else {
          return res
            .status(404)
            .json({ error: "country not found or misspelled" });
        }
      } else {
        return res.json(r);
      }
    } else {
      axios
        .get("https://restcountries.com/v3/all")
        .then((respon) => {
          let countriesApi = [];
          respon.data.map((c) => {
            let obj = {
              code: c.cca3,
              name: c.name.common,
              flag: c.flags[0],
              continent: c.region,
              capital:
                c.capital === undefined
                  ? "does not have an assigned capital"
                  : c.capital[0],
              subregion:
                c.subregion === undefined
                  ? "does not have an assigned region"
                  : c.subregion,
              area: c.area,
              population: c.population,
            };
            countriesApi.push(obj);
          });
          Country.bulkCreate(countriesApi);
        })
        .then(() => {
          let countriesGuardadosDb = getCountry();
          if (name) {
            let countryFiltrado = countriesGuardadosDb.filter((e) =>
              e.name.toLowerCase().includes(name.toLowerCase())
            );
            if (countryFiltrado.length > 0) {
              return res.json(countryFiltrado);
            } else {
              return res
                .status(404)
                .json({ error: "country not found or misspelled" });
            }
          } else {
            return res.json(countriesGuardadosDb);
          }
        })
        .catch((err) => {
          res.status(404).json({ error: err });
        });
    }
  });
};

module.exports = get_Countries;
