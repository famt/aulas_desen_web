const Aluno = require("../models/aluno")
const service = require("./serviceTable")
const Campus = require("../models/campus")

module.exports = {

    async listaAlunos(req, res) {
        Aluno.find({})
            .then(alunos => {
                return alunos;
            })
            .catch(err => console.log(err));
    },

    async obterAluno(req, res) {
        var id = req.params.id;
        Aluno.findById(id)
            .then(aluno => {
                res.status(200).send(aluno)
            })
            .catch(err => {
                console.log(err);
                res.status(404).send("Aluno não encontrado obter aluno");
            });
    },

    async inserirAluno(req, res) {

        const { matricula, nome, dataNasc, email, DDD, telefone, operadora, campus, curso } = req.body;

        const campusExiste = await Campus.find()
        console.log(campusExiste)

        var aluno = await Aluno.find({ matricula })
        if(aluno.length > 0){
            res.send('<h2> Ja existe um aluno com essa matricula'
                    +'<p><a href="/">voltar para a tela principal</a></p>');
            
                    return "ja tem essa matricula"
        }


        if (!campusExiste) {
            return res.send("fudeu")
        } else {
            const aluno = await Aluno.create({
                matricula,
                nome,
                dataNasc,
                email,
                DDD,
                telefone,
                operadora,
                campus,
                curso
            })
            res.send('index');
            //      const aluno = new Aluno(matricula, nome, dataNasc, email, DDD, telefone, operadora, campus, curso);
            //      aluno
            //     .save()
            //     .then(
            //         res.status(200),
            //         service.tabelarAlunos()
            //     )
            //     .catch((err => {
            //         console.log(err);
            //     }));
        }
    },

    async atualizarAluno(req, res) {

        const matricula  = req.params.id;
        const { nome, dataNasc, email, DDD, telefone, operadora, campus, curso } = req.body;
        console.log(matricula);
        var aluno = await Aluno.find({ matricula })
        if (aluno == undefined) {
            return res.send("Esse aluno não existe");
        }else{

            Aluno.findOneAndUpdate({matricula : matricula}, {
                $set: {
                    matricula: matricula,
                    nome: nome,
                    dataNasc: dataNasc,
                    email: email,
                    DDD: DDD,
                    telefone: telefone,
                    operadora: operadora,
                    campus: campus,
                    curso: curso
                }
            }, { new: true })
                .then(old_aluno => {
                    res.send('<h2>Aluno Atualizado com sucesso'
                    +old_aluno+ ', '
                    +'<p><a href="/">voltar para a tela principal</a></p>');
                })
                .catch(err => {
                    console.log(err);
                    res.status(404).send("Aluno não encontrado atualizar aluno");
                });
        }

            
    },

    async removerAluno(req, res) {

        const matricula = req.query.matricula
        console.log(matricula)
        const alunoSelecionado = await Aluno.findOne({ matricula });

        if (!alunoSelecionado) {
            return res.err("Esse aluno não existe");
        }

        alunoSelecionado.remove();
        res.send('<h2>Aluno Removido com sucesso'
        +alunoSelecionado+ ', '
		+'<p><a href="/">voltar para a tela principal</a></p>');
    },
    async preencherCampos(req, res) {
        var matriculaGet = req.query.matricula;
        var alunoSelecionado
        Aluno.find({})
                .then(alunos => {
                    var dados = {
                        acao : matriculaGet
                    }
                    for(var i = 0 ; i < alunos.length ; i++){
                        if (alunos[i].matricula == matriculaGet){
                            alunoSelecionado = alunos[i];
                        }
                    }
                    res.render('index',{alunos,dados,alunoSelecionado});
                })
                .catch(err => console.log(err));
        }
}