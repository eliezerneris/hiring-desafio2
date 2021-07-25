import Navbar from "./Navbar";
import './formularios.css'
import Footer from "./Footer";
import cadastro_usuario from '../images/cadastro_clientes.png'
import cadastro_produtos from '../images/cadastro_produtos.png'

const Home = () =>{
    return(
        <>
            <div className="container">
                <Navbar />
                <div className="container-fluid text-sm-center p-5 bg-light">
                    <h1 className="display-4">Hiring Coders</h1>
                    <p className="lead">Gestão de Cadastros</p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={cadastro_produtos} className="card-img-top" alt="#" />
                            <div className="card-body">
                                <h5 className="card-title">Cadastro de Produtos</h5>
                                <p className="card-text">Tela de Cadastro de Produtos.</p>
                                <a href="/produtos" className="btn btn-primary">Ir</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={cadastro_usuario} className="card-img-top" alt="#" />
                            <div className="card-body">
                                <h5 className="card-title">Cadastro de Clientes</h5>
                                <p className="card-text">Tela de Cadastro de Clientes.</p>
                                <a href="/clientes" className="btn btn-primary">Ir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )   
}

export default Home;