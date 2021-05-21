const express = require('express');
const accountController = require('../controllers/accountController');
const router = express.Router();

router
  .route('/')
  .post(accountController.createAccount)
  .get(accountController.readAccounts);

module.exports = router;
