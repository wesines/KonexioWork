
import React, { Component } from 'react'
import Cards from './cards'
import Nav from "./nav";
import moment from 'moment';


export default class WeeklyBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle:0,
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
    const TODAY = moment().format('YYYY-MM-DD')
    let LAST_WEEK=moment(TODAY).subtract(7, "days").format('YYYY-MM-DD');

    let url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=9ea2e895faa81409a7176d45966e5c77`;
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
      <h1>Weekly Battle </h1>
        {console.log("this.state.currentBattle",this.state.currentBattle)}
         {console.log("this.state.movies.length =",this.state.movies.length)}
{ (this.state.currentBattle==this.state.movies.length)?            
               <p><h3> "Vous avez parcouru tous les films !"</h3></p>
            : <p>
                 
    {this.state.movies.slice(this.state.currentBattle, this.state.currentBattle+2)
          .map((film, index) => {
      
            return (
              <p key={film.id}>
                <button onClick={() => this.nextTwoFilms(this.state.currentBattle,film.id)}>
                               
                  <Cards key={index}
                    img={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                    title={film.title}
                    desc={film.overview}
                    date={film.release_date}
                />)
                  
                 
               
                </button>
                
              </p>);
          }
          )
        }
        </p>
            }
    
      </div>




    )
  }
}

