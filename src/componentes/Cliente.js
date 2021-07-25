import React, {useState, useEffect } from 'react';
import Footer from './Footer';
import FormularioCliente from './FormularioCliente';
import Navbar from './Navbar';
//import firedb from '../database/firebase'

const Cliente = () => {

    let [dadosClientes, setDadosClientes] = useState({})
    let [idAtual, setIdAtual] = useState('')

    //FIREBASE
/*    useEffect( () => {
        firedb.child('clientes').on('value', dbPhoto =>{
            if(dbPhoto.val() != null){
                setDadosClientes({
                    ...dbPhoto.val()
                })
            }
        })
    },[]) */

    //LOCALSTORAGE
    useEffect(() => {
        const clientes = JSON.parse(localStorage.getItem("Clientes"));
        if(clientes){
            setDadosClientes(clientes)
        }
    },[]);

    /*
    const AddEdit = obj => {
        firedb.child('clientes').push(
            obj,
            error => {
                if(error){
                    console.log(error)
                }
            }
        )
    }
*/

    return(
        <div className="container">
            <Navbar />
            <div className="container-fluid text-sm-center p-5 bg-light">
                    <h1 className="display-4">Cadastro de Clientes</h1>
                    <p className="lead">Area de Cadastro de Clientes!</p>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormularioCliente {...({/*AddEdit, */idAtual, dadosClientes})} />
                </div>
                <div className="col-md-7">
                <div className="mb-3">
                    <h3><small className="text-muted">Lista de Clientes</small></h3>     
                    <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <td>Nome</td>
                                    <td>Telefone</td>
                                    <td>E-Mail</td>
                                    <td>Endereço</td>
                                    <th scope="col">Ações</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(dadosClientes).map(id => {
                                        return<tr key={id}>
                                            <td>{dadosClientes[id].nome}</td>
                                            <td>{dadosClientes[id].telefone}</td>
                                            <td>{dadosClientes[id].email}</td>
                                            <td>{dadosClientes[id].endereco}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => {setIdAtual(id)}}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>
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

export default Cliente;