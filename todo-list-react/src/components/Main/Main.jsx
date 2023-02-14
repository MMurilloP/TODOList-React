import React, { Component } from "react";
import List from "./List/List";

class Main extends Component {

  render() {
    return <main>
        <h1>Bienvenidos al TODO List</h1>
        <List/>
      </main>;
  }
}

export default Main;
