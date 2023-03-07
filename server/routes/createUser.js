const express = require('express')
const {body, validationresult} = require('express-validator');

const createUser = require('../controllers/createUser')

const router = express.Router();

router.route('/').post(body('email').isEmail(),body('password').isLength({min: 3}), createUser)

module.exports = router;