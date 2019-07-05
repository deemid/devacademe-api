const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.send('hello')
})

router.use('/users', require('./users'))
router.use('/auth', require('./auth'))

module.exports = router
