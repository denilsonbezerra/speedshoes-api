const express = require('express')
const shoesController = require('../controllers/shoes.controller')

const router = express.Router()

router.post('/shoes', shoesController.postShoes)

router.get('/shoes', shoesController.getShoes)

router.put('/shoes/:id', shoesController.updateShoes)

router.delete('/shoes/:id', shoesController.deleteShoes)

module.exports = router