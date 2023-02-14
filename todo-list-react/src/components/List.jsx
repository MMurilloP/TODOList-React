import React, { Component }from 'react'
import data from '../data.json';


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: data,
        }
    }

    deleteToDo = (i) => {
        const remainengToDo = this.state.todos.filter((e,j)=> i!== j);
        this.setState({todos: remainengToDo})
    }

    render() {
        return <div>
                <h1>Soy un List</h1>
                
                </div>
    }
}

export default List
