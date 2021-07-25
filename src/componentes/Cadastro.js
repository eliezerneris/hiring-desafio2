import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import FormularioCadastro from './FormularioCadastro';
import Navbar from './Navbar';
//import firedb from '../database/firebase'

const Cadastro = () => {

    let [dadosProdutos, setDadosProdutos] = useState({})
    let [idAtual, setIdAtual] = useState('')

    //FIREBASE
/*    useEffect( () => {
        firedb.child('produtos').on('value', dbPhoto =>{
            if(dbPhoto.val() != null){
                setDadosProdutos({
                    ...dbPhoto.val()
                })
            }
        })
    },[]) */

    //LOCALSTORAGE
    useEffect(() => {
        const produtos = JSON.parse(localStorage.getItem("Produtos"));
        if(produtos){
            setDadosProdutos(produtos)
        }
    },[]);

    /*
    const AddEdit = obj => {
        if(idAtual == ''){
            firedb.child('produtos').push(
                obj,
                error => {
                    if(error){
                        console.log(error)
                    }else{
                        setIdAtual('')
                    }
                }
            )
        }else{
            firedb.child(`produtos/${idAtual}`).set(
                obj,
                err =>{
                    console.log(err)
                }
            )
        }
    }*/

    return(
        <div className="container">
            <Navbar />
            <div className="container-fluid text-sm-center p-5 bg-light">
                    <h1 className="display-4">Cadastro de Produtos</h1>
                    <p className="lead">Area de Cadastro de Produtos!</p>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormularioCadastro {...({/*AddEdit, */idAtual, dadosProdutos})} />
                </div>
                <div className="col-md-7">
                <div className="mb-3">
                    <h3><small className="text-muted">Lista de Produtos</small></h3> 
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Produto</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(dadosProdutos).map(id => {
                                    return<tr key={id}>
                                        <td>{dadosProdutos[id].nome}</td>
                                        <td>{dadosProdutos[id].descricao}</td>
                                        <td>{dadosProdutos[id].valor}</td>
                                        <td>
                                            <a className="btn btn-primary" onClick={() => {setIdAtual(id)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cadastro;