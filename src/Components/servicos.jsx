import React from 'react';
import './home.css';
import Pranchas from '../img/pranchas.jpg';
import Equip from '../img/Equipamentos.jpg';
import Producao from '../img/producao.jpg';
import Roupas from '../img/roupas.jpg';
import Cursos from '../img/cursos.jpg';




function Servicos(){

    return(
        <>

    <div className="linha">
        <section>
            <div className="coluna col4">
                <h2>Encomendas sobre medida</h2>
                <img src={Producao} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Aulas particulares</h2>
                <img src={Cursos} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Pranchas</h2>
                <img src={Pranchas} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            

            <div className="coluna col4">
                <h2>Roupas</h2>
                <img src={Roupas} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Equipamentos</h2>
                <img src={Equip} />
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

export default Servicos;