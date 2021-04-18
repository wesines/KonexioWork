import React from "react";





export default function Card(flag,name,region,population) {


   return (
      <div className="container bg-light border mt-2">
        <div className="row justify-content-start custom-line">
          <div className="col">
          <img src={flag} style={{ width: 100, height:50 }}   />
          </div>
          </div>
          <div className="row">
          <div className="col">
           <h2> Country :</h2>
          </div> 
          </div>
          <div className="row">
          <div className="col">
          <h3>   {name}</h3>
          </div>
          </div>
          <div className="row">
          <div className="col">
          <h4> <span className="material-icons">
              public</span>    Region :</h4>
              </div>
          <div className="row"><h4>  {region}</h4>
          </div>
          </div>
          <div className="row">
          <div className="col">
          <h4> <span className="material-icons">
              group</span> 
                 Population : </h4>
               </div>
          <div className="row"><h4>{population}</h4>
          </div>
        </div>



      </div>
    )
}
