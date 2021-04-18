import React,{useEffect,useState} from 'react'
import Cards from "./cards";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Favorite () {
    const  getStorage = () => {
        return JSON.parse(localStorage.getItem("favorites_id") || "[]");
             
    }
    const [movies,setMovies]=useState([])
    const [favIDs,setFavIds]=useState(getStorage())
    // console.log(favId);
   useEffect(()=>{
    favIDs.map((item) => {
        fetch(
            `http://api.themoviedb.org/3/movie/${item}?api_key=1d921ecda80f1fbd29ea921afc924198`
          )
            .then((response) => response.json())
            .then((response) => {
              const FavouriteMovies = movies;
              FavouriteMovies.push(response);
              setMovies(FavouriteMovies)
            })
      });
   },[])


  
        return (
          <div className="container">
      
      
      <div>
           <h1>Favorites</h1>
                {movies.map((movie) => {
                    return (
                    
                    <Cards
                    image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    titre={movie.title}
                    description={movie.overview}
                    desortie={movie.release_date}
                    />
                    )
                })}
      {favIDs.length === 0 &&   <h3 className="text-center">Aucun favoris </h3>      }
        </div>
    
          </div>
        )
      
    
}
    
