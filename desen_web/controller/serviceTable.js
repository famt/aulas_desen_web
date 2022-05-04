const Aluno = require("../models/aluno")
const ctrlAluno = require("./alunos")


module.exports.tabelarAlunos = function(){
    var tabela = document.getElementsByTagName("tbody")[0];
    var newRow = tabela.insertRow();

    var campo1 = newRow.insertCell(0);
    var campo2 = newRow.insertCell(1);
    var campo3 = newRow.insertCell(2);

    var alunos = ctrlAluno.listaAlunos();

    console.log(alunos);

    // arrayJson.forEach(function(pessoa){
    //     var acesso = pessoa.acesso;
    //     acesso.forEach(function(acesso){
    //       if (acesso != null)
    //         //acesso.idTela - para acessar a propriedade pelo nome
    //     }
    //   })

    for(var aluno in alunos){
        campo1.innerHTML = aluno.matricula;
        campo2.innerHTML = aluno.nome;
        campo3.innerHTML = "<form method=put><button class=''btn bg-danger text-white' onclick='/api/alunos/:id'>Remover</button> </form>";
        campo4.innerHTML = "<form method=delete><button class=''btn bg-danger text-white' onclick='/api/alunos/:aluno._id'>Remover</button> </form>";
    }
}

// module.exports.listaAlunos = function(req, res){
//     Aluno.find({})
//     .then(alunos => {
//         res.json(alunos);
//     })
//     .catch(err => console.log(err));
// }
