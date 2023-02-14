import React, { Component } from "react";
import Item from "./Item/Item";
import data from "./data.json";
import { v4 as uuidv4 } from "uuid";
import './List.css'

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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const tarea = e.target.name.value;

    const newTarea = {
      tarea,
    }
    console.log(newTarea);
    alert("tarea añadida");
    this.setState({todos: [newTarea, ...this.state.todos ]})
    e.target.name.value = '';
  }


  render() {
    return <section>

        <h1>Añade una tarea:</h1>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label htmlFor="name"></label>
          <input type= "text" id="name" name="name"/>
          <input type="submit" value="ADD" />
        </form>

        <h1>Lista de tareas</h1>
        {/* <button onClick={this.addTodo}>Add Todo</button> */}
        <p>Opciones:</p>
        <button id="options-button" onClick={this.removeAllTodos}>Borrar todas las tareas</button>
        <button id="options-button" onClick={this.restoreTodos}>Restaurar todas las tareas</button>

        <h1>Tareas:</h1>
        {this.printCards()}

      </section>;
    
  }
}

export default List;
