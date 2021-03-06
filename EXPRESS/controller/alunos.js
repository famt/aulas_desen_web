var alunos = [];
const campusController = require("../controller/campus.js");
var campus = [];

module.exports.listaAlunos = function(req, res){
    var alunosEsp = [];
    if(req.query.campus){
        for (var i = 0; i < alunos.length; i++) {
            if(alunos[i].campi == req.query.campus){
                alunosEsp.push(alunos[i]);
            }
        }
        res.json(alunosEsp);
    }
    if(req.query.curso){
        var alunosEsp = [];
        for (var i = 0; i < alunos.length; i++) {
            if(alunos[i].curso == req.query.curso){
                alunosEsp.push(alunos[i]);
            }
        }
        res.json(alunosEsp);
    }
    if(req.query.min_data&&req.query.max_data){
        alunoEsp = alunos;
        let minData = new Date(req.query.min_data);
        let maxData = new Date(req.query.max_data);
        alunoEsp = alunosEsp.filter((alunosEsp) => {return alunosEsp.dataNas.getTime() <= maxData.getTime() && alunosEsp.dataNas.getTime() >= minData.getTime()})
        res.json(alunosEsp);
    }
    else{
        res.json(alunos);
    }
    
}

module.exports.obterAluno = function(req, res){
    var id = req.params.matricula;
    var aluno = alunos.find(aluno => (aluno.matricula == id));
    if (aluno){
        res.json(aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}

module.exports.inserirAluno = function(req, res){
    let aluno = req.body;
    campus = campusController.returnCampus();
    var _campusAux = campus.find(_campusAux => (_campusAux.campi == req.body.campi));
    if (_campusAux){
        var alunoAux = alunos.find(alunoAux => (alunoAux.matricula == aluno.matricula));
        if(alunoAux){
            res.status(500).send("Aluno ja existe no banco de dados");
        }
        else{
            alunos.push(aluno);
            res.status(200).send(aluno);
        }
    }
    else{
        res.status(404).send("Campus não existe");
    }
    
}

module.exports.atualizarAluno = function(req, res){
    let id = req.params.matricula;
    campus = campusController.returnCampus();
    var _campusAux = campus.find(_campusAux => (_campusAux.campi == req.body.campi));
    if (_campusAux){
        let _aluno = alunos.find(aluno => (aluno.matricula == id));
        if (_aluno){
            _aluno.nome = req.body.nome;
            _aluno.dataNas = req.body.dataNas;
            _aluno.email = req.body.email;
            _aluno.ddd = req.body.ddd;
            _aluno.numero = req.body.numero;
            _aluno.operadora = req.body.operadora;
            _aluno.campi = req.body.campi;
            _aluno.curso = req.body.curso;
            res.json(_aluno);
        } else{
            res.status(404).send("Aluno não encontrado");
        }
    }
    else{
        res.status(404).send("Campus não existe");
    }
}

module.exports.removerAluno = function(req, res){
    let id = req.params.matricula;
    let _aluno = alunos.find(_aluno => (_aluno.matricula == id));
    if (_aluno){
        const index = alunos.indexOf(_aluno);
        alunos.splice(index,1);
        res.json(_aluno);
    } else{
        res.status(404).send("Aluno não encontrado");
    }
}

module.exports.removerAlunoCampi = function(campi){
    var i = alunos.length;
    while (i--) {
        if (alunos[i].campi == campi) { 
            alunos.splice(i, 1);
        } 
    }
}



