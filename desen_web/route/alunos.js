const controller = require("../controller/alunos.js");
const campus = require("../controller/campus.js")

module.exports = function(app){
    app.get("/api/alunos", controller.listaAlunos);
    // app.get("/api/alunos/:id", controller.obterAluno);
    app.post("/api/alunos/", controller.inserirAluno);
    app.get("/preencherCampos", controller.preencherCampos);
    app.get("/removerAluno", controller.removerAluno);
    //app.put("/api/alunos/:id", controller.atualizarAluno);
    app.post("/api/alunos/:id", controller.atualizarAluno);
    // app.delete("/api/alunos/:id", controller.removerAluno);

    app.get("/api/campus", campus.showForm);
    app.get("/api/campus/todos", campus.listaCampus);
    app.get("/api/campus/:id", campus.obterCampus);
    app.post("/api/campus", campus.inserirCampus);
    app.put("/api/campus/:id", campus.atualizarCampus);
    app.delete("/api/campus/:id", campus.removerCampus);
}

