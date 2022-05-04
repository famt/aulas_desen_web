import React from 'react';

const AlunoItem = (props) => {
    return <div className={"row"}> 
        <span className={"col-sm-2"} >        
        <b>{props.aluno.nome}  {props.aluno.sobreNome}  </b>
        </span>
        <span className={"col"} >
            <button className={"btn btn-light"} onClick={()=>{props.onAtualizar(props.aluno)}}>Editar</button> 
            <button className={"btn btn-light"} onClick={()=>{props.onRemover(props.aluno)}}>Remover</button>         
        </span>    
    </div>
}

export default AlunoItem;