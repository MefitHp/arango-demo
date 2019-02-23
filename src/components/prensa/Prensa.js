/**
 * Created by brendaortega on 30/09/18.
 */
import React, { Component } from 'react';
import './Prensa.css';
import sr from '../home/scrollReveal.js';

class Prensa extends Component {
    componentDidMount () {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '50%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);
    }
    render() {
        return (
            <div>
                <div className="prensa none">
                    {/* <h2 className="bot">Prensa</h2>*/}
                    <a href="https://www.elfinanciero.com.mx/buena-vida/revolucion-a-la-carta-sabor-textura-y-color" target="_blank">
                        <div className="card bot">
                                <img src="https://www.elfinanciero.com.mx/uploads/2019/01/13/01ded4259d1547443783_standard_desktop_medium_retina.png" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Revolución a la carta: sabor, textura y color</h3>
                                    <p>El Financiero
                                    </p>
                                    <span>Enero, 2019</span>
                                </div>
                        </div>
                        </a>
                    <a href="https://lopezdoriga.com/vida-y-estilo/recomendaciones-para-el-fin-de-semana-del-13-al-16-de-diciembre/" target="_blank">
                        <div className="card bot">
                            <img src="https://i2.wp.com/lopezdoriga.com/wp-content/uploads/2018/12/arango.jpg?ssl=1" alt="noticia1"/>
                            <div className="nota">
                                <h3>Recomendaciones para el fin de semana</h3>
                                <p>López Doriga Digital
                                </p>
                                <span>Diciembre 2018</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.timeoutmexico.mx/ciudad-de-mexico/restaurantes/arango" target="_blank">
                        <div className="card bot">
                            <img src="https://media.timeout.com/images/105387936/1372/772/image.jpg" alt="noticia1"/>
                            <div className="nota">
                                <h3>Arango</h3>
                                <p>Timeout Ciudad de México
                                </p>
                                <span>Diciembre 2018</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.eluniversal.com.mx/menu/6-restaurantes-que-tienes-que-conocer-este-2019" target="_blank">
                        <div className="card bot">
                            <img src="https://www.eluniversal.com.mx/sites/default/files/u15544/arango_cocina_de_raices_instagram_alejandro_cuatepotzo.jpg" alt="noticia1"/>
                            <div className="nota">
                                <h3>6 restaurantes que tienes que conocer este 2019</h3>
                                <p>El Universal
                                </p>
                                <span>Enero, 2019</span>
                            </div>
                        </div>
                    </a>
            </div></div>
        )
    }
}

export default Prensa;
