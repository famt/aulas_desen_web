const express = require('express');
const controller = require('../controller/alunos.js');
const Aluno = require("../models/aluno")
const alunosRouter = require('../route/alunos.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const path = require('path');

// async function pegarAluno(){
//     return await controller.listaAlunos();
// }

 module.exports = function() {
    var app = express();
    app.set("port", 3000);
    app.set("views", "views");
    app.set("view engine", "ejs");
    app.use(bodyParser.json());       
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static('./public'));
    app.use(methodOverride('_method'));
    alunosRouter(app);
    app.get('*', (req, res) => {
        Aluno.find({})
            .then(alunos => {
                var dados = {
                    acao : '',
                }
                const alunoSelecionado = {
                    matricula : '',
                    nome : '',
                    dataNasc : '',
                    email : '',
                    DDD : '',
                    telefone : '',
                    operadora : '',
                    campus : '',
                    curso : ''
                }
                res.render('index',{alunos,dados,alunoSelecionado});
            })
            .catch(err => console.log(err));
    });
    return app;
 };