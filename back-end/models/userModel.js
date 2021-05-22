const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  templates: {
    type: Array,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
