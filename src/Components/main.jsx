import React from 'react';
import './home.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './home';
import Clientes from './clientes';
import Servicos from './servicos';


function Main(){

    return(
        <>
        <BrowserRouter>
        <div className="header">
            <div className="linha">
                <header>
                    <div className="coluna col4">
                        <h1 className="logo">Back Side</h1>
                    </div>
                    <div className="coluna col8">
                        <nav>
                                <ul className="menu inline sem-marcador">
                                    <li><a><Link to="/">home</Link></a></li>
                                    <li><a><Link to="/clientes/">clientes</Link></a></li>
                                    <li><a><Link to="/servicos/">serviços</Link></a></li>
                                </ul>
                        </nav>
                    </div>
                </header>
            </div> 
        </div>

        <main>
                <div className="content"> 
                    <Route path="/" exact component={Home}/>
                </div>

                <div className="content"> 
                    <Route path="/clientes/" exact component={Clientes}/>
                </div>

                <div className="content"> 
                    <Route path="/servicos/" exact component={Servicos}/>
                </div>
        </main>

        <div className="footer">
            <div className="linha">
                <footer>
                    <div className="coluna col12">
                        <span>&copy; 2020 - Pilat Desenvolvimento Web</span>
                    </div>
                </footer>
            </div>
        </div>
        </BrowserRouter>
        </>
    );
}

export default Main;