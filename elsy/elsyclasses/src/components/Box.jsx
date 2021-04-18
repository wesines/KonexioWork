import React, { Component } from 'react'
 
export default class Box extends Component {
    render() {
        const { color, unit, value, min, max, icon, onChange } = this.props
        if (icon !== "local_drink") {
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
                        <div className="row">
                            <div className="col">
                                <input type="range" min={min} max={max} onInput={onChange}/>
                            </div>
                        </div>
                   </div>
                </>
            )
        } else {
            return (
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
                   
                   </div>


            )
        }
    }
}
