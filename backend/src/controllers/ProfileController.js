const Spot = require('../models/Spot');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await Spot.find({ userId: user_id });

    if (!spots) {
      return res.status(400).json({ error: 'User does not exists!' });
    }

    return res.json(spots);
  },
};
