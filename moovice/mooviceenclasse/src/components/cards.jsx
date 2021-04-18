
import React, { Component } from 'react'




export default class Cards extends Component {

  render() { 
      const {title,img,date,desc}=this.props
     
      //film =this.props.film
    return (
      <div className="container">
          <div className="row">
              <div className="col sm-8">
         <h3> <p className="text-center shadow-lg p-3 mb-5 bg-white rounded">  
                     {title}</p></h3>
              </div>
              
          </div>
          <div className="row">
              <div className="col sm-4 text-right">
              <img src={img}/>
              </div>
              <div className="col sm-4">
              <em>Description</em>
             <h5> <p>{desc}</p></h5>
              <em>Année de sortie</em>
               <h3 className="">{date}</h3>
              </div>
            
         
          </div>
  


   


      </div>
    )
  }


}