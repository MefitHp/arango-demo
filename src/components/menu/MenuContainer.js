import React, { Component } from 'react'
import sr from '../home/scrollReveal.js';
import './Menu.css';

class MenuContainer extends Component {
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
            <div>
                <section className="uk-section-small menu none">
                    <div className="uk-container" >
                        <h3 className="uk-text-lead bot" style={{ marginTop: "30px" }}>Menú</h3>
                        <ul uk-accordion="multiple: true">
                            <li >
                                <a className="uk-accordion-title bot" href="#">Para compartir</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p > Aguacate con chicharrón de res y cerdo</p><p>$135.00</p>
                                    </div>
                                    <div className="food">
                                        <p> Tartar Mar y Tierra Tribilín como en las cantinas pero frío</p><p>$245.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Molotes de Yuca</p><p>$155.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tacos árabes de pierna de cordero</p><p>$225.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Queso de puerco con paté de foie gras</p><p>$235.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title bot" href="#">Entradas</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p className="">Peneque de frijol con acociles</p><p>$150.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tamal tatemado de elote con hierbas a las brasas</p><p>$115.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Chile pasilla relleno de tartar de atún</p><p>$245.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Láminas de pescado con aguachile de pina</p><p>$230.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tostada de amaranto con jaiba de concha suave</p><p>$210.00</p>
                                    </div>

                                    <div className="food">
                                        <p>Pinto de camote con barbacoa de lengua de res</p><p>$220.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Esquites negros de maíz cacahuazintle con rabo de res</p><p>$165.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title bot" href="#">Ensaladas</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Ensalada de hjas verdes con aderezo de elote asado</p><p>$135.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Ensalada de betabeles y palmitos</p><p>$155.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Ensalada tibia de langosta confitada y jaiba</p><p>$190.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Burrata con Jitomates y emulsión de hoja santa</p><p>$175.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title bot" href="#">Sopa y pasta</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title bot" href="#">Principales</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title bot" href="#">Dulce Final</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title bot" href="#">Digestivos</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title bot" href="#">Bebidas</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="uk-section-small menu display">
                    <div className="uk-container" >
                        <h3 className="uk-text-lead " style={{ marginTop: "30px" }}>Menú</h3>
                        <ul uk-accordion="multiple: true">
                            <li >
                                <a className="uk-accordion-title " href="#">Alimentos</a>
                                <div className="uk-accordion-content">
                                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title " href="#">Bebidas</a>
                                <div className="uk-accordion-content">
                                    <p className="">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title " href="#">Postres</a>
                                <div className="uk-accordion-content">
                                    <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default MenuContainer;
