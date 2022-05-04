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

const gerarArquivo = async() => {
    const arq1 = await lerArquivo('./file1.txt');
    const arq2 = await lerArquivo('./file2.txt');
    conteudo_arq1 = String(arq1).split('\n').map(Number)
    conteudo_arq2 = String(arq2).split('\n').map(Number)
    l = [conteudo_arq1, conteudo_arq2]
    var lista_soma = []
    for (let index = 0; index < 5; index++) {
        lista_soma.push(l[0][index]+l[1][index]);            
    }
    var data_file = String(lista_soma).replace(/,/g,'\n')
    const arq_saida = await escreverArquivo('./file_soma.txt', data_file)    
}

gerarArquivo().then(() => {
    console.log("Finalizado")
}).catch((erro) =>{
    console.log("não foi possivel executar")
    console.log(erro)
})  



