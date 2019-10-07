const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  spotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
  },
});

module.exports = mongoose.model('Booking', BookingSchema);
