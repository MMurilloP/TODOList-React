import React, { Component } from "react";
import WeatherListFooter from "./WeatherListFooter/WeatherListFooter";

class WeatherFooter extends Component {
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
    const { appWeather, cityName, latitude, longitude } = this.state;
    const location = cityName ? cityName : `En tu posicion actual: ${latitude}, ${longitude}`;
    return (
      <div className="weather-container2">
        <h4>El tiempo en: </h4>
        <h4>{location}</h4>
        <WeatherListFooter appWeather={appWeather} />
      </div>
    );
  }
  
}

export default WeatherFooter;
