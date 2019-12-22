const mongoose = require('mongoose');
const galaxy =  require('../models/galaxyModel');
let db = 'mongodb://localhost:27017/solar-wind';

let dbOptions = { 
                  useNewUrlParser: true, 
                  useUnifiedTopology: true,
                  useCreateIndex: true, 
                };

mongoose.Promise = global.Promise;
mongoose.connect(db, dbOptions);
let galaxyModel = galaxy.model;

//TODO redo this with async await
const saveNewGalaxy = async (galaxyInput) => galaxyModel.create(galaxyInput)

const getAllGalaxies = () => galaxyModel.find({ });

const getGalaxyByName = (name) => galaxyModel.findOne({ name: name });


module.exports = {
    saveNewGalaxy,
    getAllGalaxies,
    getGalaxyByName
}