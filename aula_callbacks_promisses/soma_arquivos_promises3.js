const fs = require('fs')

const lerArquivo = (arquivo) =>{
    return new Promise((resolve, reject) =>{
        fs.readFile(arquivo, function(erro, dado){
            if (erro){
                reject(erro)
            } else{
                resolve(dado)
            }
        })
    })
}

const escreverArquivo = function(arquivo,dados){
    return new Promise(function(resolve, reject){
        fs.writeFile(arquivo, dados, function(erro, dado){
            if (erro){
                reject(erro)
            } else{
                resolve(dado)
            }
        })
    })
}

Promise.all([
    lerArquivo("./file1.txt"),
    lerArquivo("./file2.txt")
]).then(results =>{
    somatorio = [0,0,0,0,0]
    results.forEach(element => {
        conteudo = String(element).split('\n').map(Number)
        for (let i = 0; i < 5; i++) {
            somatorio[i] = somatorio[i] + conteudo[i]            
        }
    });
    var data_file = String(somatorio).replace(/,/g,'\n')
    return escreverArquivo("./somatorio.txt", String(data_file))
}).then((dados) =>{
    console.log("finalizado")
})