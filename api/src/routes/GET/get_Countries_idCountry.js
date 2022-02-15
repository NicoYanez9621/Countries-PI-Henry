const { Country, TouristActivity } = require("../../db");

const get_Countries_idCountry = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      let country = await Country.findByPk(id, { include: TouristActivity });
      return res.status(200).json({ country });
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = get_Countries_idCountry;
