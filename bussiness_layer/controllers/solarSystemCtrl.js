const R = require('ramda');
const galaxyAPI = require('../../persistence_layer/api/galaxyAPI');

const displaySolarSystem = async (req, res, next) => {
    try {
        let galaxy = await galaxyAPI.getGalaxyByName(req.params.galaxy_name);
        let system = R.find(R.propEq('name', req.params.system_name), galaxy.systems);

        let index = R.findIndex(R.propEq('name', req.params.system_name), galaxy.systems);
        let neigbours = [];
        // Edge cases like this returning the system itself will not happen since the minimum nr of 
        // systems is 3o
        galaxy.systems[index + 1] ? neigbours.push(galaxy.systems[index + 1]) : neigbours.push(galaxy.systems[0]);
        galaxy.systems[index + 2] ? neigbours.push(galaxy.systems[index + 2]) : neigbours.push(galaxy.systems[1]);

        galaxy.systems[index - 1] ? neigbours.push(galaxy.systems[index - 1]) : neigbours.push(galaxy.systems[galaxy.systems.length - 1]);
        galaxy.systems[index - 2] ? neigbours.push(galaxy.systems[index - 2]) : neigbours.push(galaxy.systems[galaxy.systems.length - 2]);

        let constelation = system.name.split('-')[1];
        res.render('solar_system/solar_system', { galaxy, system, constelation, neigbours, parent_galaxy: galaxy.name });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    displaySolarSystem
}