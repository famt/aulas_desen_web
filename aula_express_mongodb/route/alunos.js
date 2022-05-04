const controller = require("../controller/alunos.js");

module.exports = function(app){
    app.get("/api/alunos", controller.listaAlunos);
    app.get("/api/alunos/:id", controller.obterAluno);
    app.post("/api/alunos", controller.inserirAluno);
    app.put("/api/alunos/:id", controller.atualizarAluno);
    app.delete("/api/alunos/:id", controller.removerAluno);
}

