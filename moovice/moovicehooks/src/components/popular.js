import React, { useState, useEffect } from 'react'
import Cards from "./cards";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Popular() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=040ca8637b2add45abd33fd57f13a181";
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