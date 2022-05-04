var alunos = [
    {  id:1,
       nome:"Fernando",
       sobreNome:"30"
    },
    {  id:2,
       nome:"Maria",
       sobreNome:"Silva"
    }
];

module.exports.listaAlunos = function(req, res){
    res.json(alunos);
}

module.exports.obterAluno = function(req, res){
    var id = req.params.id;
    var aluno = alunos.find(aluno => (aluno.id == id));
    if (aluno){
        res.json(aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}

module.exports.inserirAluno = function(req, res){
    let aluno = req.body;
    console.log(aluno);
    alunos.push(aluno);
    res.status(200).send(aluno);
}


module.exports.atualizarAluno = function(req, res){
    let id = req.params.id;
    let _aluno = alunos.find(aluno => (aluno.id == id));
    if (_aluno){
        _aluno.nome = req.body.nome;
        _aluno.sobreNome = req.body.sobreNome;
        res.json(_aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}

module.exports.removerAluno = function(req, res){
    let id = req.params.id;
    let _aluno = alunos.find(aluno => (aluno.id == id));
    if (_aluno){
        const index = alunos.indexOf(_aluno)
        alunos.splice(index,1);
        res.json(_aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}


