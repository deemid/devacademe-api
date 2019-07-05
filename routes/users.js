const express = require('express')
const router = express.Router()

const controller = require('./controllers/users')

router.get('/', controller.getAll)
router.route('/:id')
  .get(controller.getById)
  .put(controller.update)

module.exports = router
