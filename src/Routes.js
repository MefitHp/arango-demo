import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import NosotrosContainer from './components/nosotros/NosotrosContainer'
import { Construccion } from './components/nosotros/Contruccion'
import MenuContainer from './components/menu/MenuContainer'
import Contacto from './components/contacto/Contacto';
import Prensa from './components/prensa/Prensa';
import Reservaciones from './components/reserv/Reservaciones';

export const Router = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/nosotros" component={NosotrosContainer} />
        <Route path="/menu" component={MenuContainer} />
        <Route path="/contacto" component={Contacto}/>
        <Route path="/prensa" component={Prensa}/>
        <Route path="/reservaciones" component={Reservaciones} />
        <Route component={Construccion} />
    </Switch>
)

export default Router;