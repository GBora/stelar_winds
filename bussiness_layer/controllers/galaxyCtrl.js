const chance = require('chance');
const chanceLib = chance.Chance();

const getDownloadbleJSON = require('../helpers/helpers').getDownloadbleJSON;

const galaxyService = require('../services/galaxyService');
const galaxyAPI = require('../../persistence_layer/api/galaxyAPI');

const newGalaxy = (req, res, next) => {
    res.render('galaxy/galaxy_new');
}

const createGalaxy = async (req, res, next) => {
    let galaxy = galaxyService.createGalaxy(req.body.galaxy_type, req.body.number_systems);
    try {
        await galaxyAPI.saveNewGalaxy(galaxy);
        res.redirect('/galaxy/all');
    } catch (err) {
        next(err);
    }
}

const listAllGalaxies = async (req, res, next) => {
    try {
        let data = await galaxyAPI.getAllGalaxies();
        res.render('galaxy/galaxy_list', { galaxies: data });
    } catch (err) {
        next(err);
    }
}

const displayGalaxy = async (req, res, next) => {
    try {
        let data = await galaxyAPI.getGalaxyByName(req.params.name);
        let starterSystems = chanceLib.pickset(data.systems, 6);
        let galaxyJSON = getDownloadbleJSON(data);

        res.render('galaxy/galaxy_start', { galaxy: data, 
                                            starterSystems: starterSystems,
                                            galaxyJSON: galaxyJSON 
                                          });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    newGalaxy,
    createGalaxy,
    listAllGalaxies,
    displayGalaxy
}