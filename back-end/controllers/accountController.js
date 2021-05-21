const Account = require('../models/accountModel');
const catchAsync = require('../utils/catchAsync');

exports.createAccount = catchAsync(async (req, res, next) => {
  const newAccount = await Account.create(req.body);

  res.status(201).json({
    status: 'success',
    byId: newAccount,
  });
});

exports.readAccounts = catchAsync(async (req, res, next) => {
  const { username, month, year } = req.body;

  const accounts = await Account.aggregate([
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
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    allIds: accounts,
  });
});
