import React from 'react';
import { useState, useEffect } from 'react';

const FormularioCliente = (props) => {

    const camposValores = {
        nome: '',
        telefone: '',
        endereco: '',
        email: ''
    }

    let [ values, setValues ] = useState(camposValores)

    useEffect( () => {
        if(props.idAtual === ''){
            setValues({
                ...camposValores
            })
        }else{
            setValues({
                ...props.dadosClientes[props.idAtual]
            })
        }
    },[props.idAtual, props.clientes])


    const dadosChange = e => {
        let {name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })

    }

    let dados = {
        'nome': values.nome, 
        'telefone': values.telefone,
        'email': values.email,
        'endereco': values.endereco
    }

    function gravarDadosLocalStorage(){        
        let dadosStorage = localStorage.getItem("Clientes");
        if(dadosStorage){
            let json = JSON.parse(dadosStorage);
            json.push(dados);
            json = JSON.stringify(json);
            localStorage.setItem("Clientes", json);
        }else{
            localStorage.setItem("Clientes", JSON.stringify([dados]));
        }
    }

    const removerClienteStorage = () => {        
        let clientes_storage = JSON.parse(localStorage.getItem("Clientes"));
        clientes_storage.splice(props.idAtual, 1);
        localStorage.setItem("Clientes", JSON.stringify(clientes_storage));
        window.location.reload();     
    }

    const alterarClienteStorage = () => {        
        let clientes_storage = JSON.parse(localStorage.getItem("Clientes"));
        clientes_storage[props.idAtual] = dados;
        localStorage.setItem("Clientes", JSON.stringify(clientes_storage));        
    }

    const EnviarForm = e =>{
        //e.preventDefault()
        //FIREBASE
        //props.AddEdit(values)
        if(props.idAtual === ''){
            gravarDadosLocalStorage()
        }else{
            alterarClienteStorage()
        }
    }

    return(
        <form autoComplete="off" onSubmit={EnviarForm}>
            <div className="mb-3">
                <h3><small className="text-muted">Cadastro de Clientes</small></h3>
                <div className="row">
                    <div className="form-group input-group">
                        <input className="form-control" placeholder="Nome" name="nome" value={values.nome} onChange={dadosChange}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group input-group">
                        <input className="form-control" placeholder="Telefone" name="telefone" value={values.telefone} onChange={dadosChange}></input>
                        <input className="form-control" placeholder="E-Mail" name="email" value={values.email} onChange={dadosChange}></input>
                    </div>
                </div>            
                <div className="input-group mb-3">                
                <input className="form-control" placeholder="Endereço" name="endereco" value={values.endereco} onChange={dadosChange}></input>                
                </div>
                <div className="row">
                        <div className="form-group">
                            <input type="submit" className="btn btn-outline-primary" value={ props.idAtual === '' ? 'Salvar' : 'Atualizar'} />                      
                            <input type={ props.idAtual === '' ? 'hidden' : 'button'} className="btn btn-outline-danger" value="Excluir" onClick={removerClienteStorage} />              
                        </div>
                    </div>
            </div>
        </form>
    )
}

export default FormularioCliente;