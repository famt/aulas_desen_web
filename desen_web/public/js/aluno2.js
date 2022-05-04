function processar(idTabela){
    /*var newRow = d.createElement('tr');
    newRow.insertCell(0).innerHTML = d.getElementsByName('matricula')[0].value;
    newRow.insertCell(1).innerHTML = d.getElementsByName('nome')[0].value;
    newRow.insertCell(2).innerHTML = d.createElement('button').outerHTML;
    d.getElementById(idTabela).appendChild(newRow);
	return false;*/
	
	register(idTabela)

}

var Aluno = function(matricula, nome, dataNasc, email, DDD, telefone, operadora, campus, curso){
	this.matricula = matricula;
	this.nome = nome;
	this.dataNasc = dataNasc;
	this.email = email;
	this.DDD = DDD;
	this.telefone = telefone;
	this.operadora = operadora;
	this.campus = campus;
	this.curso = curso;
	
	console.log(this)
}
function teste(idTabela){
	console.log(idTabela);
}
function register(idTabela){

	console.log(idTabela);
	var lista = [];
	//var student = new Aluno(idTabela.matricula, idTabela.nome, idTabela.dataNasc, idTabela.email, idTabela.DDD, idTabela.telefone, idTabela.operadora, idTabela.campus, idTabela.curso);
	//var student = new Aluno(d.getElementById('inputMatricula')[0].value, d.getElementById('inputNome')[0].value, d.getElementById('inputDataNasc')[0].value, d.getElementById('inputEmail')[0].value, d.getElementById('inputDDD')[0].value, d.getElementById('inputTelefone')[0].value, d.getElementById('inputOperadora')[0].value, d.getElementById('inputCampus')[0].value, d.getElementById('inputCurso'))[0].value;
	lista.unshift(student);

	var tr = '<tr class="row">';
	for (var i = 0; i < lista.length ; i++) {
		tr + 
		'<td class="form-group col-md-3" scope="col">'+$this.find("input[name='matricula']").val()+'</td>'+
		'<td class="form-group col-md-6" scope="col">'+$this.find("input[name='nome']").val()+'</td>'+
		'<td class="form-group col-md-3" scope="col"> <button class="btn float-right btn-light" value="Excluir" onclick="excluir(lista, i)"></button> </td>'
		'<button>'
	}
	

	$('#grid').find('tbody').append( tr );
}

function excluir(lista, index){
	lista.slice(index, 1);
}



/*$(document).ready(function(){
	$('#form_aluno').submit(function(){
		var $this = $( this );

		var tr = '<tr>'+
			'<td>'+$this.find("input[name='matricula']").val()+'</td>'+
			'<td>'+$this.find("input[name='nome']").val()+'</td>'+
            '<td>'+$this.find("input[name='telefone']").val()+'</td>'+
			'</tr>'
		$('#grid').find('tbody').append( tr );

		return false;
	});
});*/