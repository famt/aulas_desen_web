import React, { Component } from 'react';
import AlunoItem from "./AlunoItem";
import axios from 'axios';

const urlEndpoint = "http://localhost:8080/alunos";

class Alunos extends Component{

    constructor(props){
        super(props);
        this.state = {
            _id : "",
            nome : "",
            sobreNome : "",
            alunos : [], 
            btLabel : "Inserir Novo"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = async () => {
        const resultado = await axios.get(urlEndpoint);
        const data = resultado.data;
        this.setState({
            alunos: data
        })
    }

    handleChange = (event) => {
        let state = { ...this.state};
        if (event.target.id === "nome")
            state = { nome : event.target.value}
        else if (event.target.id === "sobreNome")
                state = {sobreNome : event.target.value}
        this.setState(state);
    }


    handleRemover = async (aluno) => {
        const oldState = {... this.state};
        try {
            await axios.delete(urlEndpoint+"/"+aluno._id);
            const _alunos = this.state.alunos.filter(a => a._id !== aluno._id);
            this.setState({
                alunos : _alunos
            })
        } catch (error) {
            this.setState(oldState);
        }
    }

    handleAtualizar = (aluno) => {
        this.setState({
            _id : aluno._id,
            nome: aluno.nome,
            sobreNome : aluno.sobreNome,
            btLabel : "Atualizar Aluno"
        })

    }    

    handleInserir = async () => {
        const oldState = { ... this.state};
        let novoAluno = {nome : this.state.nome, sobreNome : this.state.sobreNome};
        if (this.state._id){
            novoAluno._id = this.state._id;
        }
        try {
            let _alunos;
            let resultado;
            if (!this.state._id){
                resultado = await axios.post(urlEndpoint, novoAluno);
                 _alunos = [resultado.data, ... this.state.alunos];
            } else{
                resultado = await axios.put(urlEndpoint+"/"+this.state._id, novoAluno);
                const alunos = this.state.alunos.filter(a => {return a._id !== novoAluno._id})
                _alunos = [resultado.data, ... alunos];
            }
            this.setState({
                alunos : _alunos,
                nome : "",
                sobreNome : "",
                _id : "",
                btLabel : "InserirNovo"

            })            
        } catch (error) {
            this.setState(oldState);
        }
    } 

    render(){
        return <div>
            <div>
                <input id="nome" type="text" value={this.state.nome} onChange={this.handleChange} ></input>
                <input id="sobreNome" type="text" value={this.state.sobreNome} onChange={this.handleChange}></input>
                <button onClick={this.handleInserir}>{this.state.btLabel}</button>
            </div>
            <br />
            <div>                
                {this.state.alunos.map(
                    aluno => <AlunoItem 
                              aluno={aluno} 
                              key={aluno._id}
                              onRemover={this.handleRemover}
                              onAtualizar={this.handleAtualizar}>
                             </AlunoItem>                    
                )} 
            </div>
        </div>
    }
}


export default Alunos;