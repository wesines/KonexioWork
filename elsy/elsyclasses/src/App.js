import React from "react";
import './styles/global.css'
import Box from './components/Box'
const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000
export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  changeTemp=(e)=>  {
    console.log(("ee",e.target.value))
    this.setState({
      temperature:e.target.value
    })
  }

  changeHeart=(e)=> {
    this.setState({
      heart:e.target.value
    })
  }

  changeSteps=(e)=>  {
    this.setState({
      steps:e.target.value
    }) 
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Box icon="local_drink" value={this.state.water} unit="L" color="#3A85FF" />
          <Box icon="directions_walk" value={this.state.steps} unit="steps" color="black" min={stepsMin} max={stepsMax} onChange={this.changeSteps} />
          <Box icon="favorite" value={this.state.heart} unit="bpm" color="red" min={heartMin} max={heartMax} onChange={this.changeHeart} />
          <Box icon="wb_sunny" value={this.state.temperature} unit="°C" color="yellow" min={tempMin} max={tempMax} onChange={this.changeTemp} />

        </div>
      </div>

    );
  }
}

export default App;