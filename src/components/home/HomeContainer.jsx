import React, { Component } from 'react'
import './Home.css'
import sr from './scrollReveal.js';

const date = new Date(2018, 10, 20, 11);

class HomeContainer extends Component {
    state = {
        images: [
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45797258_1874839239278122_5587242587938357248_n.jpg?_nc_cat=111&_nc_ht=scontent-dfw5-1.xx&oh=87bfc73a78a19d65e6cb2b94b34f096c&oe=5C7DA114",
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45685125_1874839255944787_5899112330943266816_o.jpg?_nc_cat=107&_nc_ht=scontent-dfw5-1.xx&oh=2684253f4acb1b58756299d3904cf333&oe=5C3E6F8E",
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45754832_1874839259278120_5335952164642619392_o.jpg?_nc_cat=107&_nc_ht=scontent-dfw5-1.xx&oh=10cabb1de23abe9eebfe85f784f60a68&oe=5C827493",
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45706040_1874839339278112_1469045726251057152_o.jpg?_nc_cat=107&_nc_ht=scontent-dfw5-1.xx&oh=54659d4add4be027d93a6bd5842eedea&oe=5C6D6250",
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45707062_1874839355944777_5107448930853978112_o.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-1.xx&oh=81750c53b3f1d50d22e9f479a3381b33&oe=5C7D8E4A",
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45763815_1874839472611432_7978563370557112320_o.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-1.xx&oh=36157d70849a681060f58555efe4f370&oe=5C7468BA",
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/45609713_1874839345944778_5031433090661089280_o.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-1.xx&oh=581f1980fff392d2c1ca11b94e1ddf8a&oe=5C8AE3B0",
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/46033172_1880073255421387_7555615632859856896_n.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-1.xx&oh=88e2c264575df8b334769f0810c65691&oe=5C673AF1"

        ],

    };
    componentDidMount () {
        window.scroll(0, 0)
        const config = {
            origin: 'right',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        const config2 = {
            origin: 'left',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }
        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.right', config2);
        sr.reveal('.left', config);
        sr.reveal('.bot', config3);
    }


    render() {
        return (
            <div style={{width:"90%", margin:"0 auto"}}>
                <section className="uk-section-small">
                    <div className="uk-container contain">
                        <h2 className="bot" style={{fontFamily: 'Arango', textAlign:"center", fontSize:"50px"}}>Próximamente 🕰</h2>
                        <div className="uk-text-center bot" style={{fontSize:"32px"}}>Abrimos el 1 de Diciembre a las 12:00 pm</div>
                        <div className="outter">
                            <div className="inner bot" uk-countdown="date: 2018-12-01T12:12:00+00:00">
                                <span className="uk-countdown-number uk-countdown-days bot"></span> días.
                                <span className="uk-countdown-number uk-countdown-hours bot"></span> horas.
                                <span className="uk-countdown-number uk-countdown-minutes bot"></span> minutos.
                            </div>
                        </div>
                      {/*  <div className="uk-grid uk-child-width-1-4@l  uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small" uk-grid="masonry: true" uk-lightbox="animation: slide">
                            {this.state.images.map((image, index) => {
                                return (
                                    <div key={index}>
                                        <div className="uk-card uk-card-default">
                                            <a className="uk-inline" href={image ? image : "https://getuikit.com/docs/images/photo.jpg"} data-type="image" data-caption="<span uk-icon='icon:expand' id='expand'></span>">
                                                <img className="bot" src={image ? image : "https://getuikit.com/docs/images/photo.jpg"} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>*/}
                    </div>
                </section>
            </div>
        )
    }
}

export default HomeContainer