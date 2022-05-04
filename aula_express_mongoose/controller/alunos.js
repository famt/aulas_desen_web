const Aluno = require("../models/aluno")

module.exports.listaAlunos = function(req, res){
    Aluno.find({})
    .then(alunos => {
        res.json(alunos);
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
//    const aluno = new Aluno(req.body.nome, req.body.sobreNome);
    const aluno = new Aluno(req.body);
    aluno
       .save()
       .then(res.status(200).send(aluno))
       .catch((err => {
           console.log(err);
       }));    
}


module.exports.atualizarAluno = function(req, res){

    Aluno.findByIdAndUpdate(req.params.id, {$set:{nome:req.body.nome, sobreNome:req.body.sobreNome}},{new:true})
    .then(old_aluno => {
            res.send(old_aluno)        
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
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Aluno não encontrado");
    });
}


