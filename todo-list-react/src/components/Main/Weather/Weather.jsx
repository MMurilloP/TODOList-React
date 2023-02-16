import React, { Component } from "react";
import './Weather.css'
import WeatherList from "./WeatherList/WeatherList";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appWeather: [],
      cityName: "Madrid",
      newCity: "",
    };
  }

  async componentDidMount() {
    await this.fetchApiWeather();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.cityName !== this.state.cityName) {
      await this.fetchApiWeather();
    }
  }

  fetchApiWeather = async () => {
    const apiKey = "538659e0389fc7143f8b6e82543811d6";
    const { cityName } = this.state;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      appWeather: data.list,
    });
  }

  handleInputChange = (e) => {
    this.setState({ newCity: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newCity === ""){
      return
    }
    this.setState({ cityName: this.state.newCity });
  };

  render() {
    const { appWeather, cityName, newCity } = this.state;

    return (
      <div className="weather-container2">
        <h1>Bienvenido a WEATHER</h1>
        <h2>El tiempo en: </h2>
        <h1>{cityName}</h1>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label>Introduce ciudad:
            <input className="css-input" type="text" value={newCity} onChange={this.handleInputChange} />
          </label>
          <button className="css-button-sliding-to-left--blue" type="submit">Buscar</button>
        </form>
        <WeatherList appWeather={appWeather} />
      </div>
    );
  }
}

export default Weather;
