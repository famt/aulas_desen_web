const Aluno = require("../models/aluno");

module.exports.listaAlunos = function(req, res){
    Aluno.fetchAll()
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
    const aluno = new Aluno(null, req.body.nome, req.body.sobreNome);
    aluno
       .save()
       .then(res.status(200).send(aluno));    
}


module.exports.atualizarAluno = function(req, res){
    // console.log("atualizacao");
    Aluno.findById(req.params.id)
    .then(old_aluno => {
        let a = new Aluno(req.params.id, req.body.nome,req.body.sobreNome);
        a.save()
        .then(
            res.send(a)
        )
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Aluno não encontrado");
    });
    
    
}

module.exports.removerAluno = function(req, res){
    Aluno.findById(req.params.id)
    .then(old_aluno => {
        let a = new Aluno(req.params.id, old_aluno.nome, old_aluno.sobreNome);
        a.delete()
        .then(
            res.send(old_aluno)
        )
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Aluno não encontrado");
    });
}


