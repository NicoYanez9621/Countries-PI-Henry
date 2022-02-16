const { TouristActivity } = require("../../db");
const post_Activity = async (req, res) => {
  const { name, difficulty, duration, season, countriesId } = req.body;
  try {
    var activityCreated = await TouristActivity.create({
      name,
      difficulty,
      duration,
      season,
    });

    await activityCreated.addCountries(countriesId);
    return res.json({ msg: activityCreated });
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = post_Activity;
