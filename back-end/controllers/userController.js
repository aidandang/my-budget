const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.readUser = catchAsync(async (req, res, next) => {
  const { uid } = req.body;
  const user = await User.findOne({ email: uid });

  if (budget) {
    res.status(200).json({
      status: 'success',
      byId: user,
    });
  } else {
    return next(new AppError('Budget is not found', 400));
  }
});
