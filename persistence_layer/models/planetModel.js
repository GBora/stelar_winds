const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: String,
    id: String,
    distance: Number,
    planet_type: String,
    life: Boolean,
    enviroment: String,
    civilization:  String
});

module.exports = {
    model: mongoose.model('PlanetModel', PlanetSchema),
    schema: PlanetSchema
}