const Aluno = require("../models/aluno")

module.exports.listaAlunos = function(req, res){
    res.json(Aluno.fetchAll());
}

module.exports.obterAluno = function(req, res){
    var id = req.params.id;    
    var aluno = Aluno.find(id);
    if (aluno){
        res.json(aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}

module.exports.inserirAluno = function(req, res){
    // let aluno_req = req.body;
    const aluno = new Aluno(req.body.id,req.body.nome, req.body.sobreNome);
    aluno.save();
    // Aluno.save(aluno);
    res.status(200).send(aluno);
}


module.exports.atualizarAluno = function(req, res){
    const _aluno = Aluno.find(req.params.id);
    if (_aluno){
        const aluno = new Aluno(req.params.id,req.body.nome, req.body.sobreNome);
//        Aluno.update(aluno);
        aluno.update();
        res.json(aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}

module.exports.removerAluno = function(req, res){
    const _aluno = Aluno.find(req.params.id);
    if (_aluno){
        _aluno.delete();
        // Aluno.remove(req.params.id);
        res.json(_aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}


