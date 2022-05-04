const Aluno = require("../models/aluno")

module.exports.listaAlunos = function(req, res){
    Aluno.find({})
    .then(alunos => {
        res.json(alunos);
//        res.render('alunos', {alunos});
    })
    .catch(err => console.log(err));
}

module.exports.obterAluno = function(req, res){
    var id = req.params.id;    
    Aluno.findById(id)
    .then(aluno => {
        res.status(200).send(aluno)
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Aluno não encontrado");
    });
}

module.exports.inserirAluno = function(req, res){
    const aluno = new Aluno(req.body);
    aluno
       .save() 
       .then(
  //          res.redirect('/api/alunos')
            res.status(201).send(aluno)
       )
    .catch((err => {
        console.log(err);
    }));    
}

module.exports.atualizarAluno = function(req, res){

    Aluno.findByIdAndUpdate(req.params.id, {$set:{nome:req.body.nome, sobreNome:req.body.sobreNome}},{new:true})
    .then(aluno_atualizado => {
//        console.log("atualizei")
//        console.log(aluno_atualizado);
            res.send(aluno_atualizado)        
//        res.redirect('/api/alunos') 
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Aluno não encontrado");
    });
    
    
}

module.exports.removerAluno = function(req, res){
    Aluno.findByIdAndRemove({_id:req.params.id})
    .then(old_aluno => {
            res.send(old_aluno)
//        res.redirect('/api/alunos') 
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Aluno não encontrado");
    });
}

module.exports.atualizar = function(req, res){
    var id = req.params.id;    
    Aluno.findById(id)
    .then(aluno => {
        res.render('atualizar_contato', {aluno});
    })
    .catch(err => console.log(err));
}

module.exports.teste = function(req, res){
     Aluno.find({})
     .then(alunos => {
         res.render('teste', {titulo:'Fernando', alunos});
     })
     .catch(err => console.log(err));
 }



