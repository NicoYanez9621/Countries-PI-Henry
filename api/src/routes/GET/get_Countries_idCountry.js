const { Country, TouristActivity } = require("../../db");

const get_Countries_idCountry = async (req, res) => {
  const { idCountry } = req.params;
  try {
    if (idCountry) {
      let country = await Country.findByPk(Number(idCountry), {
        include: TouristActivity,
      });
      if (!country) {
        return res.status(404).json({ error: "provided id not found" });
      } else {
        return res.json(country);
      }
    }
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

module.exports = get_Countries_idCountry;
