const fs = require('fs')

var contador = 0
var conteudo1 = null;
contador++
fs.readFile('./file1.txt',  function(erro, dados){
    contador--
    if (erro){
        console.log(erro)
        return
    } 
    conteudo1 = String(dados).split('\n').map(Number)
    // console.log(conteudo)
})
contador++
var conteudo2 = null;
fs.readFile('./file2.txt',  function(erro, dados){
    if (erro){
        console.log(erro)
        return
    } 
    var conteudo2 = String(dados).split('\n').map(Number)
    // console.log(conteudo)
})