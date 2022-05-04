import React from 'react';

const AlunoItem = (props) => {
    return <div> 
        <span >        
        <b>{props.aluno.nome} {props.aluno.sobreNome}  </b>
        </span>
        <span  >
            <button  onClick={()=>{props.onAtualizar(props.aluno)}}>Editar</button> 
            <button  onClick={()=>{props.onRemover(props.aluno)}}>Remover</button>         
        </span>    
    </div>
}

export default AlunoItem;