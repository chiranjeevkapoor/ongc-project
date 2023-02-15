
const adminsignin = require('../controllers/adminsignin')
const express = require('express');

const router = express.Router();

router.route('/').post(adminsignin);

module.exports = router;