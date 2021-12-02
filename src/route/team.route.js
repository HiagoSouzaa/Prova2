const express = require('express')
const teamController = require('../controller/team.controller')

const router = express.Router()

router.get('/', teamController.listAll)

module.exports = router
