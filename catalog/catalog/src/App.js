import React, { Component } from 'react'
import { movies } from "./catalogJs";
import   "./App.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
 
    }
  
  }
  componentDidMount(){
    this.setState({films:movies})
  }

 render() {console.log({movies});
    return (
     
        <div>
          <nav className="header"><h1>Liste des films</h1></nav>
          
        <div className="container">
          <ul>
            {movies.map(film => ( 
              <li key={film.id}  className="list-unstyled">
                <p className="text-center">
                <Link to={`/${film.id}`}>{film.title}</Link>
                </p>
                </li>
            ))}
          </ul>


        </div>
        </div>

    
)
}


}  