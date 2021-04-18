import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "./components/Button";
import { Card } from "./components/Card";



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital:'',
      flag:'',
      population:'',
      region: '',

    }; 
  }

   getCountry (country){
     let url=`https://restcountries.eu/rest/v2/name/${country}`
     fetch(url)
    .then(res => res.json())
    .then(resultat => {
      this.setState({ name : resultat[0].name });
      this.setState({ capital : resultat[0].capital });
      this.setState({ flag : resultat[0].flag });
      this.setState({ population : resultat[0].population });
      this.setState({ region : resultat[0].region });
    })
    .catch(error => console.error(error));
  
  }

  //*******************Autre méthode ***********************
  // async getCountry (country){
  //   try{
  //     let url=`https://restcountries.eu/rest/v2/name/${country}`
  //   const response= await fetch(url)   
  //   const resultat =await response.json()
  //     this.setState({ name : resultat[0].name });
  //     this.setState({ capital : resultat[0].capital });
  //     this.setState({ flag : resultat[0].flag });
  //     this.setState({ population : resultat[0].population });
  //     this.setState({ region : resultat[0].region });
     
  //   }
  //   catch(err){
  //    console.error(err);
  //   }   
  //  }
  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(res => res.json())
    .then(resultat => {
      this.setState({ name : resultat.name });
      this.setState({ capital : resultat[0].capital });
      this.setState({ flag : resultat[0].flag });
      this.setState({ population : resultat[0].population });
      this.setState({ region : resultat[0].region });
    })
    .catch(error => console.error(error));
  
  }

  render() {


    return (

   
      <div className="container">
        <div className="row  align-self-start">
      <h1>Country Selector</h1>
        </div>
        <div className="row">
          <div className="col">
          <Button  onClick={(e)=>this.getCountry("france")}>France</Button>

          </div>
          <div className="col">
          <Button  onClick={(e)=>this.getCountry("brasil")}>Brasil</Button>

            </div>
            <div className="col">
            <Button  onClick={(e)=>this.getCountry("croatia")}>Croatia</Button>

            </div>
        </div>
       

       <Card flag={this.state.flag} 
       name={this.state.name} 
       region={this.state.region}
       population={this.state.population} />
 


      </div>
    )
}
}
export default App;