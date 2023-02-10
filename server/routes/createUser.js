const express = require('express')

const {createUser} = require('../controllers/createUser')

const userrouter = express.Router();

router.route('/').post(createUser)

module.exports = userrouter;