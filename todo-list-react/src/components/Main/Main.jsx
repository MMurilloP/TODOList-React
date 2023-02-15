import React, { Component } from "react";
import List from "./List/List";
import WelcomePage from "./WelcomePage";
import Weather from "./Weather/Weather";
import { Routes, Route } from "react-router-dom";


class Main extends Component {

  render() {
    return <main>
        {/* <h1>TODO List</h1> */}
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/todo" element={<List/>} />
          <Route path="/weather" element={<Weather/>} />
        </Routes>
      </main>;
  }
}

export default Main;
