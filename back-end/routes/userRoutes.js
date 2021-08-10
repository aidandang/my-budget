const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/get-budget-templates').get(userController.getBudgetTemplates);
router.route('/add-budget').patch(userController.addBudget);

module.exports = router;
