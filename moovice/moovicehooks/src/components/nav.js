import React from 'react'
import { BrowserRouter, Route,  Switch } from "react-router-dom";
import Popular from './popular';
import Weekly from './weekly';
import WeeklyBattle from './weeklyBattle';
import SortieSemaine from './sortieSemaine';
import Favorite from './favorite';
import PopularBattle from './popularBattle';
import App from '../App';

 function Nav(){
     return(<>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Moovice</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/popular">Popular</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/popular-battle">PopularBattle</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/weekly">Weekly</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/weekly-battle">WeeklyBattle</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/favorites">Favorite</a>
      </li>
    </ul>
  </div>
</nav>
<BrowserRouter>
                <Switch> 

                    <Route path="/SortieSemaine" component={SortieSemaine} />
                    <Route path="/weekly" component={Weekly} />
                    <Route path="/weekly-battle" component={WeeklyBattle} />
                    <Route path="/popular" component={Popular} />
                    <Route path="/popular-battle" component={PopularBattle} />
                    <Route path="/favorites" component={Favorite} />
                </Switch>
            </BrowserRouter>
            </>
)
}

export default Nav;