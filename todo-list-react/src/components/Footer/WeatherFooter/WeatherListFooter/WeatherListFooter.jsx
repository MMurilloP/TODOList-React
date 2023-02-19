import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import WeatherCardFooter from './WeatherCardFooter/WeatherCardFooter'

class WeatherListFooter extends Component {
  render() {
    const { appWeather } = this.props;
    const appWeatherSlice = appWeather.slice(0, 8); // crear una nueva matriz con solo los primeros 10 elementos de appWeather

    return (
      <div>
        {appWeatherSlice.map((e) => (
          <WeatherCardFooter key={uuidv4()} data={e} />
        ))}
      </div>
    );
  }
}

export default WeatherListFooter;
