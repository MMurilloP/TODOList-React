import React, { Component } from "react";
import Item from "./Item/Item";
import data from "./data.json";
import { v4 as uuidv4 } from "uuid";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: "",
    };
  }

  componentDidMount() {
    this.setState({ todos: data });
  }

  deleteToDo = (i) => {
    const remainingToDos = this.state.todos.filter((event, j) => i !== j);
    this.setState({ todos: remainingToDos });
  };

  printCards = () =>
    this.state.todos.map((event, i) => (
      <Item data={event} remove={() => this.deleteToDo(i)} key={uuidv4()} />
    ));

  removeAllTodos = () => {
    this.setState({ todos: [] });
  };

  restoreTodos = () => {
    this.setState({ todos: data });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    setTimeout(() => {
      this.setState({text: "" });
    }, 5000);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const tarea = this.state.text;
    if (tarea.length < 6) {
      alert("La tarea debe tener al menos 6 caracteres.");
      return;
    }
    if (tarea === "") {
      return;
    }

    const newTarea = {
      tarea,
    };
    this.setState({
      todos: [newTarea, ...this.state.todos],
      text: "",
      showMessage: true,
    });
    setTimeout(() => {
      this.setState({ showMessage: false});
    }, 5000);
  };

  render() {
    return (
      <section>
        <h1>Añade una tarea:</h1>
        {this.state.showMessage && <p>Tarea añadida</p>}
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label htmlFor="name"></label>
          <input
            className="css-input"
            type="text"
            id="name"
            name="name"
            value={this.state.text}
            onChange={this.handleChange}
          />
          {this.state.text.length > 0 && (
            <input
              type="submit"
              value="ADD"
              className="css-button-sliding-to-left--green"
            />
          )}
        </form>

        <h3>Opciones:</h3>
        <button
          className="css-button-sliding-to-left--blue"
          onClick={this.removeAllTodos}
        >
          Borrar todas las tareas
        </button>
        <button
          className="css-button-sliding-to-left--blue"
          onClick={this.restoreTodos}
        >
          Restaurar todas las tareas
        </button>

        <h1>Lista de Tareas:</h1>
        {this.printCards()}
      </section>
    );
  }
}

export default List;
