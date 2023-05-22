import React, { Component } from "react";
import List from '../List/List'
import {Link} from 'react-router-dom'
import './WelcomePage.css'


class WelcomePage extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenido: </h1>
        <div className="link-container">
          <Link to="/todo" className="link">Ir a la ToDo-List</Link>
          <Link to="/weather" className="link">Ir a Weather-app</Link>
        </div>
      </div>
    );
  }
}


export default WelcomePage;
