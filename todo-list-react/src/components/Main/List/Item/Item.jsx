import React, { Component } from 'react';
 
class Item extends Component {
    constructor(props) {
        super(props)

        this.state ={
            todo:this.props.data
        }
    }

    render() {
        return (<div>
            <p>Tarea: {this.props.data.tarea}</p>
            <button onClick={this.props.remove}>Borrar Tarea</button>
            <hr/>
            </div>
        )
    }
}

export default Item
