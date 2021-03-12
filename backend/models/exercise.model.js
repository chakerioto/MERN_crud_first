const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    exercisename: {
      username: { type: String, require: true },
      description: { type: String, require: true },
      duration: { type: Number, require: true },
      date: { type: Date, require: true },
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
