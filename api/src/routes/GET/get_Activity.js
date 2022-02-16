const { TouristActivity, Country } = require("../../db");

const get_Activity = async (req, res) => {
  let get_Activity = async () => {
    let activityDb = await TouristActivity.findAll({
      include: { model: Country },
    });
    return activityDb;
  };
  let activity = get_Activity();
  activity
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((e) => {
      res.status(400).json({ error: e });
    });
};

module.exports = get_Activity;
