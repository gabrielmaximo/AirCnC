const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      userId: user_id,
      spotId: spot_id,
      date,
    });

    await booking
      .populate('spotId')
      .populate('userId')
      .execPopulate();

    return res.json(booking);
  },
};
