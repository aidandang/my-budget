const Account = require('../models/accountModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createAccount = catchAsync(async (req, res, next) => {
  const newAccount = await Account.insertMany(req.body);

  res.status(201).json({
    status: 'success',
    byId: newAccount,
  });
});

exports.readAccounts = catchAsync(async (req, res, next) => {
  const { username, month, year } = req.body;

  var accounts = null;

  if (!username || !month || !year) {
    return next(new AppError('username, month and year are required', 400));
  }

  accounts = await Account.aggregate([
    {
      $match: {
        username: username,
        month: month,
        year: year,
      },
    },
    {
      $group: {
        _id: '$category',
        accounts: {
          $push: '$$ROOT',
        },
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    allIds: accounts,
  });
});
