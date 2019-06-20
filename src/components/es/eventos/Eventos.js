import React, { Component } from 'react';
import {Navbar} from "../compartidos/Navbar";
import './Eventos.css'

class Eventos extends Component {
    render() {
        return (
            <section >
                <Navbar/>
                <div className="formulario">
                    <section className="sect" style={{paddingTop:"70px"}}>
                        <div>
                            <h3 className="uk-text-lead " style={{ marginTop: "30px", textAlign:"center", fontSize: "32px"}}>Eventos</h3>
                            <p className="text-justify uk-text-muted" >¿Quieres organizar tus eventos con nosotros? Cuéntanos que necesitas y nos pondremos en contacto contigo</p>
                            <br/>
                            <img src="https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                            <br/>
                            <br/>
                            <form >
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">Nombre</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="Nombre"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">Email</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="ejemplo@ejemplo.com"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">Teléfono</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="55 555 55 555"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">¿De cuantas personas es tu evento?</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input uk-form-blank uk-form-width-large" type="number"
                                               placeholder="10" />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">¿De cuanto es tu presupuesto por persona?</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="Estimado" />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">¿De cuanto es tu presupuesto por persona?</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input uk-form-blank uk-form-width-large" type="date"
                                        />
                                    </div>
                                </div>

                                <button className="btn_send">Enviar</button>
                            </form>
                            <br/>
                        </div>
                    </section>

                </div>
            </section>
        )
    }
}

export default Eventos;
