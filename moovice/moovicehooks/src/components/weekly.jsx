import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Cards from "./cards";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Weekly() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
  let url=  `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().add(-1, "weeks").format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format("YYYY-MM-DD")}&api_key=46a12a0dcce2af5d37ce67d499098b1f`
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMovies(response.results);
      });
  }, []);
  console.log("movies", movies)

  return (
    <div>
      {movies.map(((item, index) => {
        return (
          <div className="container">
            <div className="row">
                <Cards key={index}
                  titre={item.original_title}
                  description={item.overview}
                  datedesortie={item.release_date}
                  image={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                />
              </div>
            </div>
        )

      }))}
    </div>
  );
}