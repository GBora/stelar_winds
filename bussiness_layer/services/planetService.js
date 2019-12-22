const helpers = require('../helpers/helpers');
const planetTypes = require('../data/planetTypes').planetTypes;
const enviromentTypes = require('../data/enviromentTypes').enviromentTypes;
const civStages = require('../data/civStages').civStages;

const chance = require('chance');
const chanceLib = chance.Chance();

const generatePlanet = (systemName, index) => {
    let planet =  {
        name: systemName + ' ' + helpers.latinizeNumbers(index + 1),
        id: chanceLib.guid(),
        distance: 0,
        planet_type: chanceLib.pickone(planetTypes),
        life: false,
        enviroment: '',
        civilization: ''
    };

    switch (planet.planet_type) {
        case "Rocky-Planet": 
            planet.life = chanceLib.bool({ likelihood: 66 });
            break;
        case "Station":
            planet.life =  chanceLib.bool({ likelihood: 90 });
            break;
        default: 
            planet.life =  chanceLib.bool({ likelihood: 20 });
            break;
    }

    if (planet.planet_type === "Rocky-Planet") {
        planet.enviroment = chanceLib.pickone(enviromentTypes);
    } else {
        if (planet.life) {
            planet.enviroment = "Artificial";
        }
    }

    if (planet.life) {
        planet.civilization = chanceLib.pickone(civStages);
    }

    return planet;
};

module.exports = {
    generatePlanet
}