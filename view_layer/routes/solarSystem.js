const express = require('express');
const router = express.Router();

const solarSystemController = require('../../bussiness_layer/controllers/solarSystemCtrl');

router.get('/:galaxy_name/:system_name', solarSystemController.displaySolarSystem);

module.exports = router;