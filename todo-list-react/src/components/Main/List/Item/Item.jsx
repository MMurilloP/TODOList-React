import React, { Component } from 'react';
import './Item.css'

 
class Item extends Component {
    constructor(props) {
        super(props)

        this.state ={
            todo:this.props.data
        }
    }

    render() {
        return (<div id="tarea-container">
            <p><strong>Tarea:</strong> {this.props.data.tarea}</p>
            <button className='css-button-sliding-to-left--red' onClick={this.props.remove}>Borrar Tarea</button>
            </div>
        )
    }
}

export default Item
