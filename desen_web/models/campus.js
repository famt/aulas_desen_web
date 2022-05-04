// const mongodb = require('mongodb');
// const getDB = require('../util/database').getDB;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const CampusSchema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        curso: {
            type: [String],
            required: true
        }
    }
);

module.exports = mongoose.model('Campus', CampusSchema);