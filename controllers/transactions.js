const Transactions = require('../models/Transaction');
const router = require('express').Router();

exports.get_Transactions = router.get('/', async (req, res) => {
  try {
      console.log('GET_TRANSACTIONS')

      const transactions = await Transactions.find()
      
      return res.status(200).json({
          message : 'Success',
          count : transactions.length,
          data : transactions
      })
  } 
  catch (error) {
      console.log('ERROR_GET_TRANSACTIONS')
      return res.status(500).json({
          message : error
      })
  }           
})

exports.add_Transactions = router.post('/' , async (req, res, next) => {
  try {
    const { text, total } = req.body;

    const transaction = await Transactions.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: transaction
    }); 
  } catch (err) {
    if(!req.body.text) {
        console.log('Error')
      return res.status(404).json({
        message: 'Please Fill the text'
      });
    } else if(!req.body.total){
        console.log('Total')
        return res.status(400).json({
          success: false,
          message: 'Please Fill the Total'
        });      
    } else {
        console.log(err)
      return res.status(500).json({
        success: false,
        error: err
      });
    }
  }
})

exports.delete_Transactions = router.delete('/:id', async (req, res, next) => {
  try {
    const transaction = await Transactions.findById(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
})