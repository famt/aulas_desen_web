const fs = require('fs')

// Versão Callback Fora

fs.readFile('./file1.txt',meuCallBack);

function meuCallBack(err, dados){
     if (err){
         console.log(err)
         return
     }
     console.log(""+ dados);
}





//Versao Callback Dentro
// fs.readFile('./file1.txt', function callback(err, conteudo){
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(""+ conteudo);
// })

//Versao arrow
// fs.readFile('./file1.txt', (err, dados) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(""+dados);
// })

// fs.readFile('./file1.txt', (err, dados) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     fs.readFile('./file2.txt', (err2, dados2) => {
//         if (err2){
//             console.log(err2);
//             return;
//         }
//         console.log(1);
//         console.log(2);
//         console.log(""+ dados + " \n "+dados2);
//         console.log(3);
//     })    
// })

