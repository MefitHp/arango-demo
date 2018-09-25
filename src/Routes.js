import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import { NosotrosContainer } from './components/nosotros/NosotrosContainer'
import { Construccion } from './components/nosotros/Contruccion'
export const Router = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/nosotros" component={NosotrosContainer} />
        <Route component={Construccion} />
    </Switch>
)

export default Router;