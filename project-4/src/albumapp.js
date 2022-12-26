const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const albumappSchema = new Schema(
    {
        cover: String,
        album: String,
        artist: String,
        released: String,
       tracks: String,
       about: String
    }
);

const albumapp = mongoose.model('albumapp', albumappSchema);
module.exports = albumapp