const fs = require('fs')

fs.readFile('./file1.txt',  function(erro, dados){
    if (erro){
        console.log(erro)
        return
    } 
    var conteudo_arq1 = String(dados).split('\n').map(Number)
    fs.readFile('./file2.txt', function(erro2, dados2){
        if (erro2){
            console.log(erro2)
            return
        }
        var conteudo_arq2 = String(dados2).split('\n').map(Number)
        var lista_soma = []
        for (let index = 0; index < 5; index++) {
            lista_soma.push(conteudo_arq1[index]+conteudo_arq2[index]);            
        }
        var data_file = String(lista_soma).replace(/,/g,'\n')
        fs.writeFile('./file_soma.txt', data_file , function(erro3){
            if (erro3){
                console.log(erro3)
                return
            }            
        })
    } )
})
