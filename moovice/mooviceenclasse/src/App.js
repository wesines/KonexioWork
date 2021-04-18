
//https://blog.logrocket.com/localstorage-javascript-complete-guide/
// https://medium.com/how-to-react/format-your-date-or-time-in-react-js-using-moment-js-89c5c6e4f174

import React, { Component } from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav";

export default class App extends Component {
  api="9ea2e895faa81409a7176d45966e5c77"

  render() {
    return (
      <div className="container">

               <Nav />

      </div>
    )
  }


}