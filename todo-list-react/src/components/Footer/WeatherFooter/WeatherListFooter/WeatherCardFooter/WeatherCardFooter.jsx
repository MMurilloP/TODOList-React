import React, { Component } from "react";
import './WeatherCardFooter.css'


class WeatherCardFooter extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="weather-container-footer">
        <p>{data.dt_txt}</p>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" />
        <p>{data.main.temp} ºC</p>
      </div>
    );
  }
}

export default WeatherCardFooter;

