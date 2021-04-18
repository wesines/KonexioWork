import React from "react";





export class Button extends React.Component {






  render() {


    return (
      <div >


  <button className="form-control btn btn-primary" 
     onClick={this.props.onClick} >
     {this.props.children}
  </button>

      </div>
    )
} 
}
export default Button;