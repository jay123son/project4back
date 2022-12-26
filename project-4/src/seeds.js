const mongoose = require('./connection');
const albumapp = require('../models/albumapp');
const albumappSeeds = require("../SampleData/location.json");
const seedinData = async () => {
    try {

        let allData = albumappSeeds;
        
        const addedData = albumapp.insertMany(allData);
        ;
    } catch(err) {
        console.log(err);
    }
}
seedinData();

