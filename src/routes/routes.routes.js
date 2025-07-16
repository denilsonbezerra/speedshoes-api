const express = require('express')
const router = express.Router()
const shoesRoutes = require('./shoes.routes')

router.use(shoesRoutes)

module.exports = router