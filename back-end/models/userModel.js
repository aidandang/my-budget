const mongooge = require('mongoose');
const Schema = mongooge.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
});

const User = mongooge.model('User', userSchema);

module.exports = User;
