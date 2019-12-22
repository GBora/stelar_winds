const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SolarSystemSchema = require('./solarSystemModel.js').schema;

const GalaxySchema = new Schema({
    name: String,
    type: String,
    number_systems: Number,
    systems: [SolarSystemSchema]
});

module.exports = {
    model: mongoose.model('GalaxyModel', GalaxySchema ),
    schema: GalaxySchema
}