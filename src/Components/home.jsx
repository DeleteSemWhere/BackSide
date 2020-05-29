import React from 'react';
import './home.css';
import Fundo from '../img/fundo.jpg';
import Tubo from '../img/tubo.jpg';
import Nazare from '../img/nazare.jpg';
import Fernando from '../img/fernando.jpg';
import Australia from '../img/australia.jpg';
import Viagem from '../img/viagem.jpg';




function Home(){

    return(
        <>

    <div className="linha">
        <section>
            <div className="coluna col4">
                <h2>Arte do SURF </h2>
                <img src={Fundo} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="clientes.html" class="botao">Conceitos Interessantes &raquo;</a>
            </div>
            <div className="coluna col4">
                <h2>A Magia do Tubo</h2>
                <img src={Tubo} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
            </div>
            <div className="coluna col4">
                <h2>Nazaré</h2>
                <img src={Nazare} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
            </div>
        </section>
    </div>
    <div className="conteudo-extra">
        <div className="linha">
            <div className="coluna col7">
                <section>
                    <h2>Está Pensando em começar ?</h2>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                </section>
                <section>
                    <h2>Qual prancha escolher!</h2>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                </section>
                <section>
                    <h2>O QUE VOCÊ DEVE SABER</h2>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.</p>
                </section>
            </div>
            <div className="coluna col5">
                <h3>Últimas notícias</h3>
                <ul className="sem-marcador sem-padding noticias">
                    <li>
                        <img src={Fernando} />
                        <h3>Os melhores picos do Brasil</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.</p> <a href="">Leia mais &raquo;</a>
                    </li>
                    <li>
                        <img src={Australia} />
                        <h3>Surf na Austrália </h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.</p> <a href="">Leia mais &raquo;</a>
                    </li>
                    <li>
                        <img src={Viagem} />
                        <h3>É isso ai</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.</p> <a href="">Leia mais &raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        </>
    );
}

export default Home;