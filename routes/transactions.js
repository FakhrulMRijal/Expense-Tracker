const express = require('express');
const router = express.Router();
const { deleteTransaction } = require('../controllers/transactions');
const transactionsController = require('../controllers/transactions');


router.get('/', transactionsController.get_Transactions)

router.post('/', transactionsController.add_Transactions)

router.delete('/:id', transactionsController.delete_Transactions);

module.exports = router;