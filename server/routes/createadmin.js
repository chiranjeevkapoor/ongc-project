const express = require('express')

const createAdmin = require('../controllers/createAdmin')

const router = express.Router();

router.route('/').post(createAdmin)

module.exports = router;