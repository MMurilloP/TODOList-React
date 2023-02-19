import React, { Component } from "react";
import "./Footer.css"
import WeatherFooter from './WeatherFooter/WeatherFooter'



class Footer extends Component {
  render() {
    return <footer>
      <WeatherFooter/>
      </footer>;
  }
}

export default Footer;
