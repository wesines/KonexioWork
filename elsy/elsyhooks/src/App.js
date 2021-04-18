import React, {   useState } from 'react';
import "./styles/global.css"
import Box from './components/Box'
const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

const App=() =>{
  const [water,setWater]=useState(0)
  const [temperature,setTemperature]=useState(-10)
  const [heart,setHeart]=useState(120)
  const [steps,setSteps]=useState(3000)
  
const changeTemp=(e)=>  {
      setTemperature(e.target.value)
  }
  const changeHeart=(e)=> {
      setHeart(e.target.value)
 }
 const changeSteps=(e)=>  {
      setSteps(e.target.value)
 }


  return (
    <div className="container">
        <div className="row">
        <Box icon="local_drink" value={water} unit="L" color="#3A85FF" />         
        <Box icon="directions_walk" value={steps} unit="steps" color="black" 
        min={stepsMin} max={stepsMax} onChange={(e)=>changeSteps(e)} />
        <Box icon="favorite" value={heart} unit="bpm" color="red"
         min={heartMin} max={heartMax} onChange={(e)=>changeHeart(e)} />
        <Box icon="wb_sunny" value={temperature} unit="°C" color="yellow"
         min={tempMin} max={tempMax} onChange={(e)=>changeTemp(e)} />

        </div>
    </div>
  );
}

export default App;


