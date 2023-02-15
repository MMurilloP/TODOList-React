import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Nav.css'


class Nav extends Component {
  render() {
    return <div className="Nav">
      <Link to="/">Welcome</Link>
      <Link to="/todo">Todo App</Link>
      <Link to="/weather">Weather</Link>
      </div>;
  }
}

export default Nav;
