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
            <div className="prensa">
                <h2 className="bot">Prensa</h2>
                <div className="card bot">
                    <img src="https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_1480,h_987,al_c,q_90,usm_0.66_1.00_0.01/495dbf5ead054840a9b405f5b8e55af3.webp" alt=""/>
                    <div className="nota">
                        <h3>Milenio</h3>
                        <p>Arango: El autentico mexicano</p>
                        <span>Octubre, 2018</span>
                    </div>
                </div>
                <div className="card bot">
                    <img src="https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_1480,h_987,al_c,q_90,usm_0.66_1.00_0.01/495dbf5ead054840a9b405f5b8e55af3.webp" alt=""/>
                    <div className="nota">
                        <h3>Milenio</h3>
                        <p>Arango: El autentico mexicano</p>
                        <span>Octubre, 2018</span>
                    </div>
                </div>
                <div className="card bot">
                    <img src="https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_1480,h_987,al_c,q_90,usm_0.66_1.00_0.01/495dbf5ead054840a9b405f5b8e55af3.webp" alt=""/>
                    <div className="nota">
                        <h3>Milenio</h3>
                        <p>Arango: El autentico mexicano</p>
                        <span>Octubre, 2018</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prensa;
