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

const User = mongoose.model('user', userSchema);

module.exports = User;
