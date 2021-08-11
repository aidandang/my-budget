const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getBudgetTemplates = catchAsync(async (req, res, next) => {
  const { uid } = req.body;
  const user = await User.findOne({ uid });

  if (user) {
    res.status(200).json({
      status: 'success',
      templates: user.templates,
    });
  } else {
    return next(new AppError('No user is found', 400));
  }
});

exports.addBudget = catchAsync(async (req, res, next) => {
  const { uid, budget } = req.body;

  const updateResult = await User.updateOne(
    { uid },
    { $push: { budgets: budget } }
  );

  var user = null;

  if (updateResult) {
    user = await User.findOne({ uid });
  }

  if (user) {
    res.status(200).json({
      status: 'success',
      budgets: user.budgets,
    });
  } else {
    return next(new AppError('No user is found', 400));
  }
});
