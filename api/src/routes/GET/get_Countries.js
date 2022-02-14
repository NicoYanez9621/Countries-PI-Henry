const axios = require("axios");
const { Country } = require("../../db");

const get_Countries = async (req, res) => {
  let getCountry = async () => {
    let countriesDb = await Country.findAll();
    return countriesDb;
  };
  let countries = getCountry();
  //console.log(countries);
  countries.then((r) => {
    //si hay datos en la base de datos los uso y entrego todos los paises
    if (r.length > 0) {
      res.json(r);
    } else {
      // si no hay anda en la base de datos hago la peticion y guardo los datos en la base de datos
      axios
        .get("https://restcountries.com/v3/all")
        .then((respon) => {
          let countriesApi = [];
          respon.data.map((c) => {
            let obj = {
              name: c.name.common,
              flag: c.flags[0],
              continent: c.region,
              // Algunos paises no tiene capital definida
              capital:
                c.capital === undefined
                  ? "does not have an assigned capital"
                  : c.capital[0],
              // Algunos paises no tienen subregion definida
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
          return res.json(countriesGuardadosDb);
        })
        .catch((err) => {
          res.status(404).json({ error: err });
        });
    }
  });
};

module.exports = get_Countries;
