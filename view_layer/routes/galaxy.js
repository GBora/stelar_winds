var express = require('express');
var router = express.Router();
const galaxyController = require('../../bussiness_layer/controllers/galaxyCtrl');

router.get('/new', galaxyController.newGalaxy);
router.post('/new', galaxyController.createGalaxy);

router.get('/all', galaxyController.listAllGalaxies);
router.get('/:name', galaxyController.displayGalaxy);

module.exports = router;