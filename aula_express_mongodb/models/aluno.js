const mongodb = require('mongodb');
const getDB = require('../util/database').getDB;

module.exports = class Aluno {
    constructor(_id, _nome, _sobreNome) {
        this._id = _id;
        this.nome = _nome;
        this.sobreNome = _sobreNome;
    }


    save() {
        const db = getDB();
        let oper;
        if (this._id){
            oper = db
            .collection('alunos')
            .updateOne({_id : new mongodb.ObjectId(this._id)}, {$set:{nome: this.nome, sobreNome:this.sobreNome}});
        } else {
            oper = db.collection('alunos')
            .insertOne(this);
        }
        return oper
            .then(alu => {
                return alu;
            })
            .catch(err => {
                console.log(err);
            })            ;
    }

    delete() {
        const db = getDB();
        return db.collection('alunos')
            .deleteOne({_id : new mongodb.ObjectId(this._id)})
            .then(result => {
                console.log(result);
                return result;
            })
            .catch(err => {
                console.log(err);
            });
    }

    update() {
        const db = getDB();
        return db.collection('alunos')
            .updateOne( {_id: new ObjectId(this._id)}, { $set: this })
            .then(result => {
                console.log(result);
                return result;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDB();
        return db.collection('alunos')
            .find()
            .toArray()
            .then(alunos => {
                return alunos;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(idParam) {
        const db = getDB();
        console.log(idParam);
        return db.collection('alunos').
            find({ _id: new mongodb.ObjectId(idParam) })
            .next()
            .then(aluno => {
                return aluno;
            })
            .catch(err => {
                console.log(err);
            });
    }
}