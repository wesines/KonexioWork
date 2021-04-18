import React from "react";
import Button from "./Button";

export class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: 1,
    };
    this.add = this.add.bind(this)
  }
  updateProductName = (e) => {
    this.setState({ productName: e.target.value });
  };
  updatePrice = (e) => {
    this.setState({ price: e.target.value });
  };
 add(){
  this.props.addItem(this.state.productName, this.state.price)
 }
  render() {
    return (
      <div>
        Add compponent
       
          <div className="container-fluid">
            <div className="row ">
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  name=""
                  value={this.state.productName}
                  onChange={this.updateProductName}
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  type="range"
                  min={1}
                  max={10}
                  value={this.state.price}
                  onChange={this.updatePrice}
                />
             
                <button onClick={this.add} className="col-2 btn btn-primary">Add</button>
                  
               
              </div>
            </div>
          </div>
    
      </div>
    );
  }
}
export default Add;
