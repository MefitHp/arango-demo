/**
 * Created by brendaortega on 30/09/18.
 */
import React, { Component } from 'react';
import './Prensa.css';
import sr from '../home/scrollReveal.js';

class Prensa extends Component {
    componentDidMount () {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '50%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);
    }
    render() {
        return (
            <div>
                <div className="prensa none">
                   {/* <h2 className="bot">Prensa</h2>*/}
                    <h2 className="bot">Próximamente 🕰</h2>
                </div>
                <div className="prensa display">
                    {/* <h2 className="bot">Prensa</h2>*/}
                    <h2 >Próximamente 🕰</h2>
                </div>

                    {/*  <div className="card bot">
                        <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=110&_nc_eui2=AeFAu-xC_FdHaAaw4fp4Owybqb2QoK4e8gnUtyiezgFJH_eJYeMMsVODp_lc7Zph4DK7nApU7N_QfaZmvdEWFoCdtWy53CN4xRFIlJLWnjOpMw&oh=e378195dde1b2a308328cc882ba77906&oe=5C565AFF" alt=""/>
                        <div className="nota">
                            <h3>Milenio</h3>
                            <p>Arango: El autentico mexicano</p>
                            <span>Octubre, 2018</span>
                        </div>
                    </div>
                    <div className="card bot">
                        <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=110&_nc_eui2=AeFAu-xC_FdHaAaw4fp4Owybqb2QoK4e8gnUtyiezgFJH_eJYeMMsVODp_lc7Zph4DK7nApU7N_QfaZmvdEWFoCdtWy53CN4xRFIlJLWnjOpMw&oh=e378195dde1b2a308328cc882ba77906&oe=5C565AFF" alt=""/>
                        <div className="nota">
                            <h3>Milenio</h3>
                            <p>Arango: El autentico mexicano</p>
                            <span>Octubre, 2018</span>
                        </div>
                    </div>
                    <div className="card bot">
                        <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=110&_nc_eui2=AeFAu-xC_FdHaAaw4fp4Owybqb2QoK4e8gnUtyiezgFJH_eJYeMMsVODp_lc7Zph4DK7nApU7N_QfaZmvdEWFoCdtWy53CN4xRFIlJLWnjOpMw&oh=e378195dde1b2a308328cc882ba77906&oe=5C565AFF" alt=""/>
                        <div className="nota">
                            <h3>Milenio</h3>
                            <p>Arango: El autentico mexicano</p>
                            <span>Octubre, 2018</span>
                        </div>
                    </div>
                </div>
                <div className="prensa display">
                    <h2 >Prensa</h2>
                    <div className="card ">
                        <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=110&_nc_eui2=AeFAu-xC_FdHaAaw4fp4Owybqb2QoK4e8gnUtyiezgFJH_eJYeMMsVODp_lc7Zph4DK7nApU7N_QfaZmvdEWFoCdtWy53CN4xRFIlJLWnjOpMw&oh=e378195dde1b2a308328cc882ba77906&oe=5C565AFF" alt=""/>
                        <div className="nota">
                            <h3>Milenio</h3>
                            <p>Arango: El autentico mexicano</p>
                            <span>Octubre, 2018</span>
                        </div>
                    </div>
                    <div className="card ">
                        <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=110&_nc_eui2=AeFAu-xC_FdHaAaw4fp4Owybqb2QoK4e8gnUtyiezgFJH_eJYeMMsVODp_lc7Zph4DK7nApU7N_QfaZmvdEWFoCdtWy53CN4xRFIlJLWnjOpMw&oh=e378195dde1b2a308328cc882ba77906&oe=5C565AFF" alt=""/>
                        <div className="nota">
                            <h3>Milenio</h3>
                            <p>Arango: El autentico mexicano</p>
                            <span>Octubre, 2018</span>
                        </div>
                    </div>
                    <div className="card ">
                        <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=110&_nc_eui2=AeFAu-xC_FdHaAaw4fp4Owybqb2QoK4e8gnUtyiezgFJH_eJYeMMsVODp_lc7Zph4DK7nApU7N_QfaZmvdEWFoCdtWy53CN4xRFIlJLWnjOpMw&oh=e378195dde1b2a308328cc882ba77906&oe=5C565AFF" alt=""/>
                        <div className="nota">
                            <h3>Milenio</h3>
                            <p>Arango: El autentico mexicano</p>
                            <span>Octubre, 2018</span>
                        </div>
                    </div>*/}

            </div>
        )
    }
}

export default Prensa;
