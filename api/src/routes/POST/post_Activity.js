const { TouristActivity } = require("../../db");
const post_Activity = async (req, res) => {
  const { name, difficulty, duration, season, countriesId } = req.body;
  try {
    if (name && difficulty && duration && season && countriesId) {
      let activityCreated = await TouristActivity.create({
        name,
        difficulty,
        duration,
        season,
      });
      if (countriesId.length === 1) {
        if (TouristActivity) {
          await activityCreated.addCountries(countriesId);
          return res.json(activityCreated);
        }
      }
    }
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = post_Activity;
