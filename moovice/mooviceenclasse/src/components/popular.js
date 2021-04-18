
import React, { Component } from 'react'
import Cards from './cards'
import Nav from "./nav";



export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
 
    }
  
  }
  componentDidMount() {
    let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ea2e895faa81409a7176d45966e5c77";
    fetch(url)
      .then(res => res.json())
      .then(resultat => {
       this.setState({ movies: resultat.results });
      })
      .catch(error => console.error(error));  }
  render() {
    
    return (
      <div className="container">
        <Nav />
        <h1>Popular</h1>
         {this.state.movies.map((film,index)=>{
     return  <Cards key={index}
     img={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
     title={film.title}
     desc={film.overview}
     date={film.release_date}
 />
    })} 

      </div>
    )
  }


}