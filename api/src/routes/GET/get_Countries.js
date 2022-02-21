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
    //si hay datos en la base de datos los uso y entrego todos los paises
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
      // si no hay anda en la base de datos hago la peticion y guardo los datos en la base de datos
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
              // para los paises que no tienen capital
              capital:
                c.capital === undefined
                  ? "does not have an assigned capital"
                  : c.capital[0],
              // para los paises que no tienen subregion
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
        //ahora que ya tengo los datos guardados en la base de datos los consumo desde alli
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
