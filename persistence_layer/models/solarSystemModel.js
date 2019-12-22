const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlanetSchema = require('./planetModel.js').schema;

const SolarSystemSchema = new Schema({
    name: String,
    id: String,
    coord: {
        x: Number,
        y: Number,
        z: Number
    },
    star_type: String,
    objects: [PlanetSchema]
});

module.exports = {
    model: mongoose.model('SolarSystemModel', SolarSystemSchema ),
    schema: SolarSystemSchema
}