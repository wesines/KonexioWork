import React from "react";





export default function Button (onClick,children){

  return (
    <div >


      <button className="form-control btn btn-primary"
        onClick={onClick} >
        {children}
      </button>

    </div>
  )
}

