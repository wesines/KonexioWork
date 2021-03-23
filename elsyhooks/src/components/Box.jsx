import React from 'react'
import '../styles/global.css'

export default function Box({icon,value,min,max,unit,onChange,color}) {
    const rangeSlide=()=>{
        if (icon !== "local_drink") {
            return(
                <div className="row">
                            <div className="col">
                                <input type="range" min={min} max={max} onInput={onChange}/>
                            </div>
                        </div>
            )
    }
}
    return (

        <>
        
               <div className="box col-6 col-sm-3">
                        <div className="row">
                            <div className="col">
                                <span style={{ fontSize: 100, color: color }} className="material-icons">
                                    {icon}
                                </span>
                            </div>
                            <div className="col">
                                {value}
                                {unit}
                            </div>
                        </div>
                            { rangeSlide()}
                      
                   </div>


          

        </>
    )
}

