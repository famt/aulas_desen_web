import React, { Component } from 'react';
import AlunoItem from "./AlunoItem";
import axios from "axios";


const urlEndpoint = "http://localhost:8080/alunos";

class Alunos extends Component{

    constructor(props){
        super(props);
        this.state = {
            _id : "",
            nome: "",
            sobreNome : "",
            btLabel : "Inserir Novo",
            alunos : []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount(){
        const _alunos = await axios.get(urlEndpoint)
        this.setState({
            alunos : [..._alunos.data]
        })
//        console.log(this.state.alunos);
    }

    handleChange = (event) =>{
        let state = {...this.state};
        if (event.target.id === "nome")
            state = {nome: event.target.value}
        else 
            state = {sobreNome: event.target.value}
        this.setState(state);
    }

    handleRemover = async (aluno) => {
        let oldState =  {...this.state};
        try {
            await axios.delete(urlEndpoint+"/"+aluno._id);
            const _alunos = this.state.alunos.filter(a => a._id !== aluno._id);
            this.setState({
                alunos : _alunos
            })
        } catch (error) {
            console.log(error);
            this.setState(oldState);
        }        
    }

    handleAtualizar = (aluno) => {
        this.setState(
            {_id :aluno._id,
             nome:aluno.nome,
             sobreNome:aluno.sobreNome, 
             btLabel:"Atualizar"
            })
    }    

    handleInserir = async () => {
        const oldState =  {...this.state};
        let _aluno = {nome: this.state.nome, sobreNome: this.state.sobreNome};
        if (this.state._id){
            _aluno._id = this.state._id;
        }
        try {
            let result;
           let _alunos; 
            if (!this.state._id){
                result = await axios.post(urlEndpoint, _aluno);
                _alunos = [result.data, ...this.state.alunos];
            } else {
                result = await axios.put(urlEndpoint+"/"+this.state._id, _aluno);
                const alunos = this.state.alunos.filter(a => {return a._id !== _aluno._id});
                _alunos = [result.data, ...alunos];                
            }                        
            this.setState({
                _id : "",
                nome:"",
                sobreNome : "",
                alunos : _alunos,
                btLabel:"Inserir Novo"
            })
        } catch (error) {
            console.log(error);
            this.setState(oldState);
        }
    } 

    render(){
        return <div>
            <div>
                <input id="nome" type="text" value={this.state.nome} onChange={this.handleChange}></input>
                <input id="sobreNome" type="text" value={this.state.sobreNome} onChange={this.handleChange}></input>
                <button onClick={() => {this.handleInserir()}}>{this.state.btLabel}</button>
            </div>
            <br />
            <div className={"container"}>                
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