import React, { Component } from 'react';
import './Reservaciones.css';
import sr from '../home/scrollReveal';

class Reservaciones extends Component {
    componentDidMount () {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);
    }

    render() {
        return (
            <div className="reservaciones">
                <h2 className="bot">Has tu reserva aquí</h2>

            </div>
        )
    }
}

export default Reservaciones;
