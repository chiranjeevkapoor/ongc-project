

const express = require('express')

const getUserslogs = require('../controllers/getUsersLogs')

const router = express.Router();
router.route('/').get(getUserslogs)

module.exports = router;