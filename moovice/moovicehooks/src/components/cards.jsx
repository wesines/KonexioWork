
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default function Cards({ titre, description, datedesortie, image }) {
  return (
    <div className="container">
          <div className="row">
              <div className="col sm-8">
         <h3> <p className="text-center shadow-lg p-3 mb-5 bg-white rounded">  
                     {titre}</p></h3>
              </div>
              
          </div>
          <div className="row">
              <div className="col sm-4 text-right">
              <img src={image}/>
              </div>
              <div className="col sm-4">
              <em>Description</em>
             <h5> <p>{description}</p></h5>
              <em>Année de sortie</em>
               <h3 className="">{datedesortie}</h3>
              </div>
            
         
          </div>
  


   


      </div>
  )}
  

