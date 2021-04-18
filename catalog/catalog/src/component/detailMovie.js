import React, { Component } from 'react'
import { movies } from "../catalogue.json";
import { Link } from "react-router-dom";


export default class DetailMovie extends Component {

  //   componentDidMount(){
  //     fetch(`./catalog.json/id=${this.props.match.params.id}`, {
  //       headers : { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }

  //     })
  //     .then(res => res.json())
  //     .then(resultat => {
  //       console.log("res",resultat)
  //     //this.setState({ activeMovie:resultat })
  //   })
  // }

  render() {
    return (
      <div classNameName="container">

        {movies.map(movie => (
          (movie.id == this.props.match.params.id) ?
          <p key={movie.id}>
            <div className="row ">
              <div className="col-sm-12"> <h1 className="text-center">  {movie.title}</h1></div>
            </div>
            <div className="row">
              <div className="col-6"> <p className="text-right"> <img src={movie.image} /></p>  </div>
              <div className="col-3"><em>{movie.description}</em></div>
            </div>
            <div className="row">
              <div className="col-6"><p className="text-right">Director : <h5>  {movie.director}</h5></p></div>
              <div className="col-6">
               Liste des acteurs : <ul>{movie.stars.map((star, index) => (
                  <li>{star}</li>
                ))}</ul></div>
            </div>




          </p>
          : <p></p>
        ))}



      </div>
    )
  }


}