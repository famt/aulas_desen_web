const express = require('express');
const alunosRouter = require('../route/alunos.js');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

module.exports = function() {
    var app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());       
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static('./public'));
    app.set("view engine", "ejs");
    app.set("views", "views");    
    app.use(cors());
    alunosRouter(app);
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, '../public/index.html'));
    });
    return app;
 };

