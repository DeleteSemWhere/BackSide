import React from 'react';
import './home.css';
import Kelly from '../img/Kelly.jpg';
import Adriano from '../img/AdrianodeSouza.jpg';
import Medina from '../img/Medina.jpg';
import ItaloFerreira from '../img/italo.jpg';
import JhonJhon from '../img/download.jpg';
import Felipe from '../img/FelipeToledo.jpg';




function Clientes(){

    return(
        <>

    <div className="linha">
        <section>
            <div className="coluna col4">
                <h2>Kelly Slater</h2>
                <img src={Kelly} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Adriano de Souza</h2>
                <img src={Adriano} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Gabriel Medina</h2>
                <img src={Medina} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Italo Ferreira</h2>
                <img src={ItaloFerreira} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>JhonJhon</h2>
                <img src={JhonJhon} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Felipe Toledo</h2>
                <img src={Felipe} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

        </section>
    </div>
    </>
    );
}

export default Clientes;