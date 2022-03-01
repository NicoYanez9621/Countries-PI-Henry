const { TouristActivity, Country } = require("../../db");

const get_Activity = async (req, res) => {
  try {
    let activityDb = await TouristActivity.findAll({
      include: { model: Country },
    });
    res.status(200).json(activityDb);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

module.exports = get_Activity;
