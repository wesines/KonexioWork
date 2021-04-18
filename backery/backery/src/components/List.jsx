import React, { Component } from 'react'
export default class List extends Component {

    render() {
        return (
            <div items= {this.props.items} > 
            <ul className="list-group">
                {this.props.items.length ? this.props.items.map(element => (
                    <li className="list-group-item">
                        {element.name}
                        <span className="badge badge-primary badge-pill">{element.price}€</span>
                    </li>
                )): <h1>NO ITEMS added</h1>}
            </ul>
            </div>
        )
    }
}