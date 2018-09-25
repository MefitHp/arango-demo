import React, { Component } from 'react'
import './Home.css'
import Countdown from 'react-countdown-now';

const date = new Date(2018, 10, 20, 11);

class HomeContainer extends Component {
    state = {
        images: [
            "https://images.unsplash.com/photo-1529564879024-c54e7c2dd0e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4db9250c2b7ca32530838c559be60f56&auto=format&fit=crop&w=1500&q=80",
            "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5d544bcd4ed70a95394185b2340f9ab&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ad59d9235c26b813c3450d63d88ac20&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1517254456976-ee8682099819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f90bb66387a2b9edf0dd7f518eb2b658&auto=format&fit=crop&w=358&q=80",
            "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9571e7dfc1016803908833844646dbb3&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-0.3.5&s=187dae45de9bab8f7f667ae3759a8dce&auto=format&fit=crop&w=758&q=80",
            "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7fc4917011de5709727efa4b8497bad&auto=format&fit=crop&w=751&q=80",


        ],

    };

    renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <span>Ya está</span>;
        } else {
            // Render a countdown
            return <div style={{ paddingBottom: '20px' }} className="uk-text-large uk-text-uppercase uk-text-center"> Faltan {days} días, {hours} horas, {minutes} minutos, {seconds} segundos para la apertura.</div>
        }
    }
    render() {
        return (
            <div>
                <section className="uk-section-small">
                    <div className="uk-container">
                        <div className="uk-text-center">Abrimos el 20 de Noviembre a las 12:00.</div>
                        <div className="outter">
                            <div className="inner" uk-countdown="date: 2018-11-20T12:12:00+00:00">
                                <span className="uk-countdown-number uk-countdown-days"></span> días, 
                                <span className="uk-countdown-number uk-countdown-hours"></span> horas, 
                                <span className="uk-countdown-number uk-countdown-minutes"></span> minutos.
                                <span className="uk-countdown-number uk-countdown-seconds"></span>
                            </div>
                        </div>
                        <div className="uk-grid uk-child-width-1-4@l  uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small" uk-grid="masonry: true" uk-lightbox="animation: slide">
                            {this.state.images.map((image, index) => {
                                return (
                                    <div key={index}>
                                        <div className="uk-card uk-card-default">
                                            <a className="uk-inline" href={image ? image : "https://getuikit.com/docs/images/photo.jpg"} data-type="image" data-caption="<span uk-icon='icon:expand' id='expand'></span>">
                                                <img src={image ? image : "https://getuikit.com/docs/images/photo.jpg"} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomeContainer