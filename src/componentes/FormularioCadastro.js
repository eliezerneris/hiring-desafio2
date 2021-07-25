import React, { useEffect } from 'react';
import { useState } from 'react';
import './formularios.css'

const FormularioCadastro = (props) => {

    const camposValores = {
        nome: '',
        descricao: '',
        valor: ''
    }

    let [ values, setValues ] = useState(camposValores)

    useEffect( () => {
        if(props.idAtual === ''){
            setValues({
                ...camposValores
            })
        }else{
            setValues({
                ...props.dadosProdutos[props.idAtual]
            })
        }
    },[props.idAtual, props.produtos])

    const dadosChange = e => {
        let {name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })

    }

    let dados = {
        'nome': values.nome, 
        'descricao': values.descricao,
        'valor': values.valor
    }

    function gravarDadosLocalStorage(){        
        let dadosStorage = localStorage.getItem("Produtos");
        if(dadosStorage){
            let json = JSON.parse(dadosStorage);
            json.push(dados);
            json = JSON.stringify(json);
            localStorage.setItem("Produtos", json);
        }else{
            localStorage.setItem("Produtos", JSON.stringify([dados]));
        }
    }

    const removerProdutoStorage = () => {        
        let produtos_storage = JSON.parse(localStorage.getItem("Produtos"));
        produtos_storage.splice(props.idAtual, 1);
        localStorage.setItem("Produtos", JSON.stringify(produtos_storage));
        window.location.reload();     
    }

    const alterarProdutoStorage = () => {        
        let produtos = JSON.parse(localStorage.getItem("Produtos"));
        produtos[props.idAtual] = dados;
        localStorage.setItem("Produtos", JSON.stringify(produtos));        
    }

    const EnviarForm = e =>{
        //e.preventDefault()
        //FIREBASE
        //props.AddEdit(values)
        if(props.idAtual === ''){
            gravarDadosLocalStorage()
        }else{
            alterarProdutoStorage()
        }
    }

    return(
        <form autoComplete="off" onSubmit={EnviarForm}>
            <div className="mb-3">
                <h3><small className="text-muted">Cadastro de Produtos</small></h3>
                <div className="row">
                    <div className="form-group input-group">
                        <input className="form-control" placeholder="Produto" name="nome" value={values.nome} onChange={dadosChange}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group input-group">
                        <input className="form-control" placeholder="Descricao" name="descricao" value={values.descricao} onChange={dadosChange}></input>
                    </div>
                </div> 
                <div className="row">
                    <div className="form-group input-group">
                        <input className="form-control" placeholder="Valor" name="valor" value={values.valor} onChange={dadosChange}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-primary" value={ props.idAtual === '' ? 'Salvar' : 'Atualizar'} />                      
                        <input type={ props.idAtual === '' ? 'hidden' : 'button'} className="btn btn-outline-danger" value="Excluir" onClick={removerProdutoStorage} />              
                    </div>
                </div>
            </div>
        </form>        
    )
}

export default FormularioCadastro;