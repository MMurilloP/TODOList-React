import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="weather-container">
        <p><strong>Fecha y hora: </strong></p>
        <p>{data.dt_txt}</p>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" />
        <p><strong>Temperatura: </strong>{data.main.temp} ºC</p>
        <p><strong>Descripción: </strong>{data.weather[0].description}</p>
      </div>
    );
  }
}

export default WeatherCard;
