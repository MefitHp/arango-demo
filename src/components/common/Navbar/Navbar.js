import React from 'react'
import Logo from '../../../assets/arango_logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <div>
        <nav className="uk-navbar-container uk-navbar-transparent hide" uk-navbar="" >
            <div className="uk-navbar-left">
                <img src={Logo} className="logo" alt="" />
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservaciones">Reservación</Link></li>
                    <li><Link to="/prensa">Prensa</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
        <div className="uk-offcanvas-content uk-hidden@m">
            <div id="sidenav" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul className="uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical">
                        <li><Link to="/" uk-toggle="target: #sidenav">Inicio</Link></li>
                        <li><Link to="/nosotros" uk-toggle="target: #sidenav">Nosotros</Link></li>
                        <li><Link to="/menu" uk-toggle="target: #sidenav">Menu</Link></li>
                        <li><Link to="/reservaciones" uk-toggle="target: #sidenav">Reservación</Link></li>
                        <li><Link to="/prensa" uk-toggle="target: #sidenav">Prensa</Link></li>
                        <li><Link to="/contacto" uk-toggle="target: #sidenav">Contacto</Link></li>
                        <li className="uk-nav-divider" uk-toggle="target: #sidenav"></li>
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