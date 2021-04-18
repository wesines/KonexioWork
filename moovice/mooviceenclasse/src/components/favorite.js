import React, { Component } from 'react'
import Cards from './cards'
import Nav from "./nav";

export default class Favorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      favIDs: JSON.parse(localStorage.getItem("favorites_id")) || [],
    }

  }

  componentDidMount() {
    this.state.favIDs.map((item) => {
      fetch(
          `http://api.themoviedb.org/3/movie/${item}?api_key=1d921ecda80f1fbd29ea921afc924198`
        )
          .then((response) => response.json())
          .then((response) => {
            const FavouriteMovies = this.state.movies;
            FavouriteMovies.push(response);
            this.setState({movies:FavouriteMovies})
            console.log("lengthmovies",this.state.movies.length);
            console.log("favid",this.state.favIDs);

          })
    });
  }

  render() {
    return (
    
              <div className="container">
   <Nav />
                <div>
                  <h1>Favorites</h1>
                  {this.state.movies.map((movie) => {
                    return (

                      <Cards
                        img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        title={movie.title}
                        desc={movie.overview}
                        date={movie.release_date}
                      />
                    )
                  })}
                  {this.state.favIDs.length === 0 && <h3 className="text-center">Aucun favoris </h3>}
                </div>

              </div>
            )


          }
        }