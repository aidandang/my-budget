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
  'HEALTH',
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
  monthyear: {
    type: String,
    required: true,
    unique: true,
  },
  accounts: {
    type: [accountSchema],
    required: true,
  },
});

const templateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  budget: {
    type: Array,
  },
});

const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  budgets: {
    type: [budgetSchema],
  },
  templates: {
    type: [templateSchema],
  },
});

budgetSchema.index({ monthyear: 1 });
accountSchema.index({ name: 1 });
userSchema.index({ uid: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
