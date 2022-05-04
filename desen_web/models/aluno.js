// const mongodb = require('mongodb');
// const getDB = require('../util/database').getDB;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const AlunoSchema = new Schema(
    {
        matricula : {type : Number},
        nome : String,
        dataNasc : Date,
        email : String,
        DDD : Number,
        telefone : Number,
        operadora : String,
        campus : String,
        curso : String
    }
);

module.exports = mongoose.model('Aluno', AlunoSchema);