const admin = require('../firebase/admin');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/userModel');

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not signed in.', 401));
  }

  const decodedToken = await admin.auth().verifyIdToken(token);

  if (decodedToken) {
    const { uid } = decodedToken;

    const user = await User.findOne({ uid: uid });
    if (!user) {
      const newUser = await User.create({ uid: uid });
    }

    req.body.uid = uid;

    return next();
  } else {
    return next(new AppError('You are not authorized.', 401));
  }
});
