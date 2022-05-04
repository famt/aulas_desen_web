// const mongodb = require('mongodb');
// const getDB = require('../util/database').getDB;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const AlunoSchema = new Schema(
    {
        nome : String,
        sobreNome : String
    }
);

module.exports = mongoose.model('Aluno', AlunoSchema);

