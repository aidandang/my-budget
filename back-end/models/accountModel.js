const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const CATEGORY = [
  'CHARITY',
  'SAVING',
  'HOUSING',
  'UTILITIES',
  'FOOD',
  'CLOTHING',
  'TRANSPORTATION',
  'MEDICAL/HEALTH',
  'INSURANCE',
  'PERSONAL',
  'RECREATION',
  'DEBTS',
  'INCOME',
];

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  month: {
    type: Number,
    required: true,
    enum: {
      values: MONTHS,
      message: 'Month is only a number from 1 to 12',
    },
  },
  year: {
    type: Number,
    required: true,
    min: [2000, 'Year must be greater or equal 2000'],
    validate: {
      validator: function (value) {
        return value.isInteger();
      },
      message: 'Year must be an integer',
    },
  },
  caterory: {
    type: String,
    required: true,
    enum: {
      values: CATEGORY,
      message: 'Category name must be in the list',
    },
  },
  budget: {
    type: Number,
    require: true,
    min: [0, 'Account value must be greater or equal 0'],
    validate: {
      validator: function (value) {
        return value.isInteger();
      },
      message: 'Account value must be an integer',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
