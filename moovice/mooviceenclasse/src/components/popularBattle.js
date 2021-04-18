
import React, { Component } from 'react'
import Cards from './cards'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Nav from "./nav";



export default class PopularBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
      favorites_id:[]
    
    }

  }

     nextTwoFilms = ( current,id) => {
      let favorites =this.state.favorites_id
      favorites.push(id)
      this.setState({
        currentBattle:current+2,
        favorites_id:favorites
      })
      localStorage.setItem("favorites_id", JSON.stringify(this.state.favorites_id))
 
 }
 
  
  componentDidMount() {
    let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ea2e895faa81409a7176d45966e5c77";
    fetch(url)
      .then(res => res.json())
      .then(resultat => {
        this.setState({ movies: resultat.results });
      })
  }
  render() {
 
    let number = this.state.currentBattle;
    
   
  
      return (
 
      <div className="container">
            
        <Nav />
         <h1>Popular Battle</h1>
   { (this.state.currentBattle==this.state.movies.length)?            
               <p><h3> "Vous avez parcouru tous les films !"</h3></p>
            : <p>
                 
    {this.state.movies.slice(this.state.currentBattle, this.state.currentBattle+2)
          .map((film, index) => {
      
            return (
              <p key={film.id}>
                <button onClick={() => this.nextTwoFilms(this.state.currentBattle,film.id)}>
                               
                  <Cards key={index}
                    img={`https://image.tmdb.org/t/p/w300/${film.backdrop_path}`}
                    title={film.title}
                    desc={film.overview}
                    date={film.release_date}
                />
                  
                 
               
                </button>
                
              </p>);
          }
          )
        }
        </p>
            }
        {/*this.state.movies.map((item, index) => {
          if (index >= 2) return null;

          return (
            <p key={item.id}>
              <button onClick={() => this.nextTwoFilms(index)}>
                <Cards film={item} key={`film-list-key ${index}`} /></button>
            </p>
            );
              }

            )*/}
      </div>




    )
  }
}

