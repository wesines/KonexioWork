
import React, { Component } from 'react'
import Cards from './cards'
import Nav from "./nav";
import moment from 'moment';


export default class Weekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
 
    }
  
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
        <h1>Weekly </h1>
         {this.state.movies.map((item,index)=>{
     return  <Cards key={index}
     img={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
     title={item.title}
     desc={item.overview}
     date={item.release_date}
 />
    })} 

      </div>
    )
  }


}