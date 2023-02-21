

const express = require('express')

const updateuser = require('../controllers/updateuser')

const router = express.Router();
router.route('/').post(updateuser)

module.exports = router;