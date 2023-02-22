import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./WeatherCard/WeatherCard";

class WeatherList extends Component {
  render() {
    const { appWeather } = this.props;

    return (
      <div className="weather-container-container">
        {appWeather.map((e) => (
          <WeatherCard key={uuidv4()} data={e} />
        ))}
      </div>)
  }
}

export default WeatherList;
