const fs = require('fs')
var conteudo_arq1 = [], conteudo_arq2 = [];

fs.readFile('./file1.txt',  function(erro, dados){
    if (erro){
        console.log(erro)
        return
    } 
    conteudo_arq1 = String(dados).split('\n').map(Number)
})

fs.readFile('./file2.txt', function(erro2, dados2){
    if (erro2){
        console.log(erro2)
        return
    }
    conteudo_arq2 = String(dados2).split('\n').map(Number)
})

var lista_soma = [];
for (let index = 0; index < 5; index++) {
    var valor = conteudo_arq1[index] + conteudo_arq2[index];
    lista_soma.push(valor)    
}

var data_file = String(lista_soma).replace(/,/g,'\n')
        
fs.writeFile('./file_soma.txt', data_file , function(erro3){
    if (erro3){
        console.log(erro3)
        return
    }            
})
