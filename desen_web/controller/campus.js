const Campus = require("../models/campus")
const service = require("./serviceTable")

module.exports={

    async listaCampus(req, res){
        Campus.find({})
        .then(campus => {
            res.json(campus);
        })
        .catch(err => console.log(err));
    },

    async campusByName(req, res){

        const campus = req.query;
        var filter={}

        if(campus){
            filter.campus = campus;
        }

        const campusFilt = await Campus.find(filter);

        if(campusFilt.length == 0){
            return res.err("Nao há campus com esse nome");
        }
    },
    //function(req, res){
        //const campusByName = function(camp, res){
            //Campus.find({nome : req.nome})
            //Campus.find().byName(req.nome).exec(function(err, nome){
    // .then(campus => {
    //     console.log(nome);
    //     res.send(campus);
    // })
    // .catch(err => {
    //     console.log(err);
    // })


    async obterCampus(req, res){
        var id = req.params.id;    
        Campus.findById(id)
        .then(campus => {
            res.status(200).send(campus)
        })
        .catch(err => {
            console.log(err);
            res.status(404).send("Campus não encontrado");
        });
    },

    async inserirCampus(req, res){
        const campus = new Campus(req.body);
        campus
        .save()
        .then(res.status(200))
        .catch((err => {
            console.log(err);
        })); 
       
    },

    async atualizarCampus(req, res){

        Campus.findByIdAndUpdate(req.params.id, {$set:{nome:req.body.nome, 
            curso:req.body.curso}},{new:true})
        .then(old_campus => {
                res.send(old_campus)        
        })
        .catch(err => {
            console.log(err);
            res.status(404).send("Campus não encontrado");
        });
    
    },

    async removerCampus(req, res){
        Campus.findByIdAndRemove({_id:req.params.id})
        .then(old_campus => {
                res.send(old_campus)
        })
        .catch(err => {
            console.log(err);
            res.status(404).send("Campus não encontrado");
        });
    }, 

    //async 
    async checkCampusCurso(campus, curso){
        console.log('so mais um teste');
        console.log(campus);
        console.log(curso);
        var filter = {};

        if(campus && curso){
            filter.nome = campus;
            filter.curso = curso;
        }

        console.log(filter); 

        const campusRetornados = /*await*/ Campus.find(filter);
        console.log(campusRetornados);

        if(campusRetornados.length == 0){
            return false;
            //return ("Não existe esse campus ou esse curso");
        }

        //res.send(campusRetornados)
        //res.send(true);
        return true;


        // campusByName({campus})
        // .then(camp =>{

        //     console.log("tipo de campus é "+ typeof(campus.curso));
        //     res.send(camp)
        // })
        // .catch(err => {
        //     res.status(404).send("Não esse curso não existe no campus "+campus)
        // })

        // for (var i = 0; i < campus.curso.; i++) {
        //     if (campus.curso[i] === curso) {
        //         return true;
        //     }
        // }
        
        // console.log("Não existe esse curso no campus "+campus_.nome);
        // return false;


    
    },

    showForm(req, res){
        res.render("../public/cadastroCampus.ejs");
    }
}
