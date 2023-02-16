import React, { Component } from "react";
import './Weather.css'
import { v4 as uuidv4 } from "uuid";


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
    this.fetchApiWeather();
  }
  
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.cityName !== this.state.cityName) {
      this.fetchApiWeather();
    }
  }

  async fetchApiWeather() {
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
      <div>
        <h1>Bienvenido a WEATHER</h1>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label>Introduce ciudad:
            <input className="css-input" type="text" value={newCity} onChange={this.handleInputChange} />
          </label>
          <button className="css-button-sliding-to-left--blue" type="submit">Buscar</button>
        </form>
        <h2>La temperatura en: </h2> 
          <h1><strong>{cityName}</strong></h1>
        <h2> en los próximos 5 días:</h2>
        {appWeather.map((weatherData) => (
          <div className="weather-container" key={uuidv4}>
            <p><strong>Fecha y hora: </strong></p>
            <p>{weatherData.dt_txt}</p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="icon" />
            <p><strong>Temperatura: </strong>{weatherData.main.temp} ºC</p>
            <p><strong>Descripción: </strong>{weatherData.weather[0].description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Weather;
