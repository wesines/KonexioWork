import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import DetailMovie from './detailMovie';
import App from '../App';


export default class Router extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <Switch> {/* Ce composant ne s'affichera pas à l'écran, il liste les chemins possibles */}
                    <Route exact path="/" component={App}   /> {/* Chaque route est un composant <Route> */}
                    <Route path="/:id" component={DetailMovie} />
                </Switch>
            </BrowserRouter>

        )
    }
}





