import React from 'react'
import Logo from '../../../assets/arango_logo.png'
import './Navbar.css'

export const Navbar = () => (
    <div>
        <nav className="uk-navbar-container uk-navbar-transparent hide" uk-navbar="" >
            <div className="uk-navbar-left">
                <img src={Logo} className="logo" alt="" />
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Menú</a></li>
                    <li><a href="">Reservaciones</a></li>
                    <li><a href="">Prensa</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
        </nav>
        <div className="uk-offcanvas-content uk-hidden@m">
            <div id="sidenav" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul className="uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Menú</a></li>
                        <li><a href="">Reservaciones</a></li>
                        <li><a href="">Prensa</a></li>
                        <li><a href="">Contacto</a></li>
                        <li className="uk-nav-divider"></li>
                        <li><a uk-toggle="target: #sidenav"><span className="uk-margin-small-right" uk-icon="icon: close"></span> Cerrar</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ paddingLeft: '10px' }} uk-toggle="target: #sidenav" uk-navbar-toggle-icon=""></div>
                <div style={{ margin: '0 auto' }}>
                    <img src={Logo} className="logo" alt="" />
                </div>
            </div>

        </div >
    </div>
)