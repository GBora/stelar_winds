const solarSystemService = require('./solarSystemService');

const createGalaxy = (type, number_systems) => {
    const chance = require('chance');
    const chanceLib = chance.Chance();

    let galaxy = { type: type, number_systems: number_systems, systems: [] };

    let name = '' + chanceLib.letter() + chanceLib.letter() + chanceLib.letter();
    name =  name + '-';
    name =  name + chanceLib.integer({ min: 1000, max: 9999 });
    name = name.toUpperCase();
    
    galaxy.name = name;

    for (let i =  0; i < number_systems; i++) {
        galaxy.systems.push(solarSystemService.generateSolarSystem());
    }

    return galaxy;
}

module.exports = {
    createGalaxy
}