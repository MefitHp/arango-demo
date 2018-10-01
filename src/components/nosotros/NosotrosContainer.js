import React, {Component} from 'react'
import './Nosotros.css'
import sr from '../home/scrollReveal.js';

class NosotrosContainer extends Component {
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

        sr.reveal('.bot', config3);
    }


    render() {
        return (

            <section className="uk-section-small">
                <div className="uk-container snappy-scroll">
                    <div className="filosofia">
                        <div className="img-box">
                            <img style={{margin: 'auto'}}
                                 src="https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19a3a4640d3a734c3da937653a66c809&auto=format&fit=crop&w=401&q=80"
                                 alt=""/>
                        </div>
                        <div className="text-box">
                            <h3 className="uk-text-lead uk-text-uppercase bot">Somos la nueva revolución</h3>
                            <p className="text-justify uk-text-muted bot">
                                Doroteo Arango luchó por un ideal, por un México mejor, por un sueño; hoy nosotros los
                                jóvenes de México tenemos la responsabilidad de seguir con esta lucha y hacerle un
                                homenaje a nuestras raíces, gritarle a nuestro México que el sueño de Arango se puede
                                cumplir todos los días de diferentes formas. <br /> <br />

                                Hoy luchamos por la igualdad, por la sustentabilidad y por ayudar a nuestras
                                comunidades; luchamos por ayudar a erradicar el hambre y la pobreza, luchamos por ser
                                una empresa socialmente responsable y promover el cambio en México; en cada plato se
                                demuestra nuestra pasión, nuestras raíces y el orgullo de nuestros sabores.<br /> <br />

                                En Arango nuestra visión va más allá de ser un restaurante extraordinario, sino un lugar
                                que realmente enaltezca el ser mexicano, un lugar que demuestre a través de cada plato y
                                cada sabor que se puede tener lo que algún día empezó como un sueño, un México mejor.
                            </p>
                        </div>
                    </div>
                    <div className="about-chef">
                        <div className="text-box">
                            <h3 className="uk-text-lead uk-text-uppercase bot">Acerca del chef</h3>
                            <p className="text-justify uk-text-muted bot">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Quos dolorum numquam magnam magni, natus voluptatum esse quasi iusto sequi
                                molestiae voluptatem repudiandae ipsa quibusdam iure. Odio ea vel et dolores itaque
                                perferendis expedita sunt quisquam consectetur neque.</p>
                        </div>
                        <div className="img-box">
                            <img style={{margin: 'auto'}}
                                 src="https://images.unsplash.com/photo-1532635224-cf024e66d122?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd420ae5e15c23ec48bf9b60125b7dca&auto=format&fit=crop&w=750&q=80"
                                 alt=""/>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default NosotrosContainer;

