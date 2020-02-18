import React from "react";
import './css/WeatherCard.css'

export const WeatherCard = (props) => {
  const date = new Date(props.data.dt * 1000)

  return <div className="weather-card">
    <div className="weather-card__day">
      {date.toDateString()}
    </div>
    <div className="weather-card__image">
      <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.icon}/>
    </div>
    <span className="weather-card__tempt">Temperature: {props.data.temp.day}°</span>
    <span className="weather-card__weather">Weather: {props.data.weather[0].main}</span>
    <span className="weather-card__max-tempt">Max:{props.data.temp.max}°</span>
    <span className="weather-card__min-tempt">Min:{props.data.temp.min}°</span>
  </div>
}

