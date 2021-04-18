import React, { useState,useEffect } from 'react'
import { movies } from "./catalogue.json";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

 const App=() =>{

 const [films,setFilms]=useState([])
 useEffect(() => {
   setFilms(movies)
  }, [])
     
 
  return (
     
    <div>
      <nav><h1>Liste des films</h1></nav>
      
    <div className="container">
      <ul>
        {films.map(film => ( 
          <li key={film.id}  className="list-unstyled">
            <p className="text-center">
            <Link to={`/${film.id}`}>
              {film.title}
              </Link>
            </p>
            </li>
        ))}
      </ul>


    </div>
    </div>


)

}

export default App;
