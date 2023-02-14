import React, { Component } from "react";
import Item from "./Item/Item";
import data from "./data.json";
import { v4 as uuidv4 } from "uuid";

console.log(data);

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: data,
    };
  }

  deleteToDo = (i) => {
    const remainingToDos = this.state.todos.filter((event, j) => i !== j);
    this.setState({ todos: remainingToDos });
  };

  printCards = () =>
    this.state.todos.map((event, i) => 
      <Item data={event} remove={() => this.deleteToDo(i)} key={uuidv4()} />)
  
  

  addTodo = () => {
    const promptodo = prompt("Nombre de la tarea?");

    const newTodo = {
      tarea: promptodo,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  removeAllTodos = () => {
    this.setState({ todos: [] });
  };

  restoreTodos = () => {
    this.setState({ todos: data });
  };

  render() {
    return <section>

        <h1>Escribe la tarea:</h1>
        <input type= "text" />
        <button>ADD</button>
        <h1>Lista de todos</h1>
        <button onClick={this.addTodo}>Add Todo</button>
        <button onClick={this.removeAllTodos}>Remove All Todos</button>
        <button onClick={this.restoreTodos}>Restore Todos</button>

        <h1>Tareas:</h1>
        {this.printCards()}

      </section>;
    
  }
}

export default List;
