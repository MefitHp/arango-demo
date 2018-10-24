import React from 'react'
import './Menu.css'

export const MenuContainer = () => (
    <section className="uk-section-small">
        <div className="uk-container menu-container">
            <div className="box">
                <h3 className="uk-text-lead text-center">Menú</h3>
                <ul uk-accordion="multiple: true">
                    <li className="uk-open">
                        <a className="uk-accordion-title" href="#">Alimentos</a>
                        <div className="uk-accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </li>
                    <li>
                        <a className="uk-accordion-title" href="#">Bebidas</a>
                        <div className="uk-accordion-content">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                        </div>
                    </li>
                    <li>
                        <a className="uk-accordion-title" href="#">Postres</a>
                        <div className="uk-accordion-content">
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
)