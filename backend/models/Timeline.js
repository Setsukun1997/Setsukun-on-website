const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String
});

module.exports = mongoose.model('Timeline', timelineSchema);
