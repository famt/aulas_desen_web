const alunos = [];

module.exports = class Aluno{
    constructor(_id, _nome, _sobreNome){
        this.id = _id;
        this.nome = _nome;
        this.sobreNome = _sobreNome
    }

    save(){
        alunos.push(this);
    }

    delete(){
        const a = alunos.find(aluno => (aluno.id == this.id));
        const index = alunos.indexOf(a);
        console.log(index);
        alunos.splice(index, 1);
    }

    update(){
        const a = alunos.find(aluno => (aluno.id == this.id));
        const index = alunos.indexOf(a);
        alunos.splice(index, 1, this);
    }

    static fetchAll(){
        return alunos;
    }

    static find(_id){
        return alunos.find(aluno => (aluno.id == _id));
    }
}


