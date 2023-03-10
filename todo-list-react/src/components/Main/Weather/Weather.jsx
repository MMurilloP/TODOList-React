import React, { Component } from "react";
import './Weather.css'
import WeatherList from "./WeatherList/WeatherList";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appWeather: [],
      cityName: "",
      newCity: "",
      latitude: null,
      longitude: null,
    };
  }
  
  fetchApiWeather = async () => {
    const apiKey = "538659e0389fc7143f8b6e82543811d6";
    const { cityName, latitude, longitude } = this.state;
    const url = cityName
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      : `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      appWeather: data.list,
    });
  };
  

  async componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ latitude, longitude }, this.fetchApiWeather);
      });
    } else {
      // La geolocalización no está soportada
      console.log("La geolocalización no está soportada en este navegador");
    }
  }
  

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.cityName !== this.state.cityName) {
      await this.fetchApiWeather();
    }
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
    const { appWeather, cityName, newCity, latitude, longitude } = this.state;
    const location = cityName ? cityName : `En tu posicion actual: ${latitude}, ${longitude}`;
    return (
      <div className="weather-container2">
        <h1>Bienvenido a WEATHER</h1>
        <h2>El tiempo en: </h2>
        <h1>{location}</h1>
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
