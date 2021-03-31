const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  var user = await User.findOne({ email: email });

  if (user) {
    return next(new AppError('Email is in use.', 422));
  }

  user = new User({
    email: email,
  });

  await user.save();

  res.status(201).json({
    status: 'success',
    user,
  });
});
