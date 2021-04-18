import React from "react";


export class Button extends React.Component {





  render() {
      const { onClick,  children,isSelected}=this.props
    return (
      <div>
        <button type="button" className={isSelected} onClick={onClick} >
        {children}  
        </button>

         
      </div>

    )
  }
}
  export default Button;