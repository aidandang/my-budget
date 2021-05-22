const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

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
    min: 1,
    max: 12,
    validate: {
      validator: function (value) {
        return Number.isInteger(value);
      },
      message: 'Month must be an integer',
    },
  },
  year: {
    type: Number,
    required: true,
    min: [2000, 'Year must be greater or equal 2000'],
    validate: {
      validator: function (value) {
        return Number.isInteger(value);
      },
      message: 'Year must be an integer',
    },
  },
  category: {
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
        return Number.isInteger(value);
      },
      message: 'Account value must be an integer',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

accountSchema.index({ username: 1, month: 1, year: 1 });

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
