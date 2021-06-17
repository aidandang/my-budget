const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/get-budget-templates').get(userController.getBudgetTemplates);

module.exports = router;
