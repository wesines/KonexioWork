import React, { useState, useEffect } from 'react'
import Cards from "./cards";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function PopularBattle() {
  const [movies, setMovies] = useState([]);
  const [currentBattle, setCurrentBattle] = useState(0);
  const [favorites_id, setFavorites_id] = useState([]);

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

  const onClickBattle = ( current,id) => {
     let favorites =favorites_id
     favorites.push(id)

     setCurrentBattle(current + 2)
     setFavorites_id(favorites)
  
    console.log("favorites", favorites_id)
     localStorage.setItem("favorites_id", JSON.stringify(favorites_id))

}

  return (
    <div>
    <div>
  {movies.length > 1 && currentBattle < movies.length &&
    <>
    <div  className="row ">
        <div className="col-12 col-md-6">
        <button onClick={() => onClickBattle(currentBattle,movies[currentBattle].id)}>
            <Cards
                image={`https://image.tmdb.org/t/p/w300/${movies[currentBattle].poster_path}`}
                titre={movies[currentBattle].original_title}
                description={movies[currentBattle].overview}
                datedesortie={movies[currentBattle].release_date}
            />
          </button>
        </div>
        <div className="col-12 col-md-6">
        <button onClick={() => onClickBattle(currentBattle,movies[currentBattle].id)}>
            <Cards
                image={`https://image.tmdb.org/t/p/w300/${movies[currentBattle + 1].poster_path}`}
                titre={movies[currentBattle + 1].title}
                description={movies[currentBattle + 1].overview}
                datedesortie={movies[currentBattle + 1].release_date}

            />
        </button>
        </div>
    </div>                    
    </>
}
{
    currentBattle ===movies.length && 
    <div className="text-center">
        <h1>Vous avez parcouru tous les films !!</h1>
    </div>
}
</div>
</div>

      )



}