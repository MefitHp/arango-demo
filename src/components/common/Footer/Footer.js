import React from 'react';
import './Footer.css'

export const Footer = () => (
    <footer>
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="" >
            <div className="uk-navbar-center redes">


                        <a target="blank" href="https://www.facebook.com/ArangoRestaurante/">
                            <span className="uk-icon uk-margin-small-right" uk-icon="icon: facebook"></span>
                            Facebook
                        </a>

                        <a target="blank" href="https://www.instagram.com/arango_cocinaderaices/">
                            <span className="uk-icon uk-margin-small-right" uk-icon="icon: instagram"></span>
                            Instagram
                        </a>

                        <a style={{ pointerEvents: 'none', cursor: 'default' }} href="">
                            Arango Restaurant, {new Date().getFullYear()}™
                        </a>


            </div>
        </nav>
    </footer>
);