const express = require('express')

const softdeleteUser = require('../controllers/softdeleteUser')

const router = express.Router();

router.route('/').delete(softdeleteUser)

module.exports = router;