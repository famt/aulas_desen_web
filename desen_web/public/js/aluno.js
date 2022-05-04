import {controller} from "../../controller/alunos"
//const controller = require("../../controller/alunos.js");


alunos = [];
var selectCampus = document.getElementById('inputCampus');
/*
class Aluno{
    constructor(matricula,nome,dataNasc,email,DDD,telefone,operadora,campus,curso){
        this.matricula = matricula;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.email = email;
        this.DDD = DDD;
        this.telefone = telefone;
        this.operadora = operadora;
        this.campus = campus;
        this.curso = curso;
    }
}*/
/*var Aluno = function(matricula, nome, dataNasc, email, DDD, telefone, operadora, campus, curso){
	this.matricula = matricula;
	this.nome = nome;
	this.dataNasc = dataNasc;
	this.email = email;
	this.DDD = DDD;
	this.telefone = telefone;
	this.operadora = operadora;
	this.campus = campus;
    this.curso = curso;*/
/*    
function adicionarAluno(){

    var matricula = document.getElementById('inputMatricula')
    var nome = document.getElementById('inputNome')
    var dataNasc = document.getElementById('inputDataNasc')
    var email = document.getElementById('inputEmail')
    var DDD = document.getElementById('inputDDD')
    var telefone = document.getElementById('inputTelefone')
    var operadora = document.getElementById('inputOperadora')
    var campus = document.getElementById('inputCampus')
    var curso = document.getElementById('inputCurso')
    
    var aluno = new Aluno(matricula.value,nome.value,dataNasc.value,email.value,DDD.value,telefone.value,operadora.value,campus.value,curso.value);
    
    alunos.push(aluno)  
*/
function tabelaAlunos(){
    var tabela = document.getElementsByTagName("tbody")[0];
    var newRow = tabela.insertRow();

    var campo1 = newRow.insertCell(0);
    var campo2 = newRow.insertCell(1);
    var campo3 = newRow.insertCell(2);

    var alunos = []
    alunos = controller.listaAlunos
    alunos.forEach(element => {
        campo1.innerHTML = element.matricula;
        campo2.innerHTML = element.nome;
        campo3.innerHTML = "<button class='btn bg-danger text-white' onclick='controller.removerAluno'>Remover</button> ";
    });

}

    // var tabela = document.getElementsByTagName("tbody")[0];
    // var newRow = tabela.insertRow();  

    // var campo1 = newRow.insertCell(0);
    // campo1.innerHTML = aluno.matricula;

    // var campo2 = newRow.insertCell(1);
    // campo2.innerHTML = aluno.nome;

    // var celula3 = newRow.insertCell(2);
    // celula3.innerHTML = "<button class='btn bg-danger text-white' onclick='removerAluno(this)'>Remover</button> ";

//}
function removerAluno(alunoId){

    var tabela = document.getElementsByTagName("tbody")[0];
    tabela.deleteRow(alunoId.parentElement.parentElement.rowIndex-1);
    alunos.splice(alunoId.parentElement.parentElement.rowIndex-1,1);

}

function optionsCurso(){
    
    var cursos = document.getElementById('inputCurso');
                    
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    if(selectCampus.value=="Pici"){
        option1.textContent = "Ciência da Computação"; 
        option2.textContent = "Matemática";
        option3.textContent = "Estatística";
    }else if(selectCampus.value=="Benfica"){
        option1.textContent = "Letras";
        option2.textContent = "História";
        option3.textContent = "Direito";
    }else if(selectCampus.value=="Porangabussu"){
        option1.textContent = "Medicina";
        option2.textContent = "Odontologia";
        option3.textContent = "Farmácia";
    }
   
    cursos.innerHTML = "";
    cursos.appendChild(option1);
    cursos.appendChild(option2);
    cursos.appendChild(option3);
}

selectCampus.onchange = optionsCurso;
/*
var cursosPici=["Computação", "Engenharias ", "Matematica"];
var cursosBenfica=["Letras", "História", "Direito"];
var cursosPoranga=["Farmácia", "Medicina", "Odontologia"];


function campusChanged(campus){ 

   var selectCurso = document.getElementById('inputCurso');
   var ln = selectCurso.length - 1;

   while (ln > 0)   {
        selectCurso.remove(1);  //Remove all but "Select State"
        ln--;
   }
  
   /*
   var selectCity = document.getElementById('cities');
   var ln = selectCity.length - 1;
   while (ln > 0)
   {
     selectCity.remove(1);  //Remove all but "Select City"
     ln--;
   }   */
  /*
   var cursoArray;
  
   switch(campus)
   {
     case "Benfica":
        cursoArray=cursosBenfica
         break;
     case "Pici":
        cursoArray=cursosPici
         break;
     case "Porangabussu":
        cursoArray=cursosPoranga
         break;
     default:
   }     
      
   for (i = 0; i < cursoArray.length; i++)
   {
     var option = document.createElement('option');
     option.text = cursoArray[i];
     option.value = cursoArray[i];
     selectCurso.add(option);
   }     
}*/


