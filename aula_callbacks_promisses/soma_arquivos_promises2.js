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


lerArquivo('./file1.txt').then(function(dados){
    conteudo_arq1 = String(dados).split('\n').map(Number)
    return lerArquivo('./file2.txt')
}).then(function(dados){
    conteudo_arq2 = String(dados).split('\n').map(Number)
    var lista_soma = []
    for (let index = 0; index < 5; index++) {
        lista_soma.push(conteudo_arq1[index]+conteudo_arq2[index]);            
    }
    var data_file = String(lista_soma).replace(/,/g,'\n')
    return escreverArquivo('./file_soma.txt', data_file)    
}).then(function(){
    console.log("finalizado")
}).catch((erro) =>{
    console.log("não foi possivel executar")
    console.log(erro)
})  
