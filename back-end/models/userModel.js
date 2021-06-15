const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  'INCOMES',
];

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: CATEGORY,
      message: 'Category name must be in the list',
    },
  },
  value: {
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

const budgetSchema = new Schema({
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
  accounts: {
    type: [accountSchema],
    required: true,
  },
});

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  budgets: {
    type: [budgetSchema],
  },
  templates: {
    type: Array,
  },
});

budgetSchema.index({ month: 1, year: 1 });
accountSchema.index({ name: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
