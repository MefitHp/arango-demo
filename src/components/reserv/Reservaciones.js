import React, { Component } from 'react';
import './Reservaciones.css';
import sr from '../home/scrollReveal';

class Reservaciones extends Component {

    componentWillMount(){
        document.createElement( )
    }

    componentDidMount() {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }


    }

    render() {
        return (
            <div>
                <div className="reservaciones none">
                    <h2 className="bot">Próximamente 🕰</h2>

                </div>
                <div className="reservaciones display">

                </div>
            </div>

        )
    }
}

export default Reservaciones;
