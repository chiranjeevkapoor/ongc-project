const express = require('express')

const getuserinfo = require('../controllers/getuserinfo')

const router = express.Router();

router.route('/').post(getuserinfo)

module.exports = router;