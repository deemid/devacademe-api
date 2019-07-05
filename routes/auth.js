const express = require('express')
const router = express.Router()

const auth = require('./controllers/auth')

router.post('/register', auth.register)
router.post('/login', auth.login)

// Redis Key check only... remove later
router.get('/redis', auth.getKey)

module.exports = router
