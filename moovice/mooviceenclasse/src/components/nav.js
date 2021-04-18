
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Nav extends Component {
    api = "9ea2e895faa81409a7176d45966e5c77"

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link  className="navbar-brand" to="/">Home</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                              
                                <li className="nav-item">
                                    <Link to="/popular"><span className="nav-link">Popular</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/popular-battle"><span className="nav-link">Popular Battle</span></Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link to="/weekly"><span className="nav-link">Weekly</span></Link>
                                </li>
                               <li className="nav-item">
                                    <Link to="/weekly-battle"><span className="nav-link">WeeklyBattle</span></Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/favorites"><span className="nav-link">Favorites</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>


        )
    }


}
