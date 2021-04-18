import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import App from '../App';
import Popular from './popular';
import Weekly from './weekly';
import WeeklyBattle from './weeklyBattle';
import Favorite from './favorite';
import PopularBattle from './popularBattle';



export default class Router extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <Switch> {/* Ce composant ne s'affichera pas à l'écran, il liste les chemins possibles */}
                    <Route exact path="/" component={App}   /> {/* Chaque route est un composant <Route> */}
                    <Route path="/weekly" component={Weekly} />
                    <Route path="/weekly-battle" component={WeeklyBattle} />
                    <Route path="/popular" component={Popular} />
                    <Route path="/popular-battle" component={PopularBattle} />
                    <Route path="/favorites" component={Favorite} />
                </Switch>
            </BrowserRouter>

        )
    }
}





