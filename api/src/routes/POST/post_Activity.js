const { TouristActivity, Country } = require("../../db");
const post_Activity = async (req, res) => {
  const { name, difficulty, duration, season, countriesId } = req.body;

  try {
    var obj = {
      name,
      difficulty,
      duration,
      season,
    };
    const [activityCreated, created] = await TouristActivity.findOrCreate({
      where: {
        name: name,
      },
      defaults: obj,
    });

    for (let i = 0; i < countriesId.length; i++) {
      await activityCreated.addCountries(countriesId[i]);
    }
    return res.json({
      msg: `The activity "${activityCreated.name}" has been created successfully`,
    });
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = post_Activity;
