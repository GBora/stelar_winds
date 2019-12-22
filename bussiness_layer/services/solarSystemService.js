const chance = require('chance');
const chanceLib = chance.Chance();
const starTypes = require('../data/starTypes').types;
const latin = require('../data/latin');
const generatePlanet = require('./planetService.js').generatePlanet;

const generateSolarSystem = () => {

    let system = {
        name: '',
        id: chanceLib.guid(),
        coord: {
            x: chanceLib.integer({ min: -10000, max: 10000}),
            y: chanceLib.integer({ min: -10000, max: 10000}),
            z: chanceLib.integer({ min: -10000, max: 10000})
        },
        star_type: chanceLib.pick(starTypes),
        objects: []
    };

    system.name = chanceLib.pick(latin.latinNumbers) + 
                  '-' +
                  chanceLib.pick(latin.latinNames); 
                  
    let number_objects = chanceLib.integer({ min: 2, max: 10 });

    for (let i = 0; i < number_objects; i++) {
        system.objects.push(generatePlanet(system.name, i));
    }

    return system;
}

module.exports = {
    generateSolarSystem
}