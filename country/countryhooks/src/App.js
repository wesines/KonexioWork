import React,{useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import  Button  from "./components/Button";
import  Card  from "./components/Card";
export default function App() {
  const [name,setName]=useState("")
  const [capital,setCapital]=useState("")
  const [flag,setFlag]=useState("")
  const [population,setPopulation]=useState("")
  const [region,setRegion]=useState("")

  useEffect(() => {
 

    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(res => res.json())
    .then(resultat => { console.log(resultat[0].name)
      setName(resultat[0].name);
      setCapital(resultat[0].capital);
      setFlag(resultat[0].flag);
      setPopulation(resultat[0].population);
      setRegion(resultat[0].region);
    })
    .catch(error => console.error(error));
  
  }, [])
  
  const getCountry= (country)=>{
    console.log(country)

    let url=`https://restcountries.eu/rest/v2/name/${country}`
    fetch(url)
   .then(res => res.json())
   .then(resultat => {
     setName(resultat[0].name);
     setCapital(resultat[0].capital);
     setFlag(resultat[0].flag);
     setPopulation(resultat[0].population);
     setRegion(resultat[0].region);
  
   })
   .catch(error => console.error(error));
 
 }

  return (
    <div className="container">
    <div className="row  align-self-start">
  <h1>Country Selector</h1>
    </div>
    <div className="row">
      <div className="col">
      <Button  onClick={(e)=>getCountry("france")}>France</Button>

      </div>
      <div className="col">
      <Button  onClick={(e)=>getCountry("brasil")}>Brasil</Button>

        </div>
        <div className="col">
        <Button  onClick={(e)=>getCountry("croatia")}>Croatia</Button>

        </div>
    </div>
    <Card flag={flag} 
       name={name} 
       region={region}
       capital={capital}
       population={population} />

       </div>
   
  );
}
