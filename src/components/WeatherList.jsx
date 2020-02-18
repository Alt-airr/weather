import React from "react";
import Preloader from "../common/Preloader";
import NotFound from "../common/NotFound";
import useWeatherFetch from "../hooks/FetchWeather";
import {weatherApiLink} from "../api/WeatherAPI";
import {WeatherCard} from "./WeatherCard";

import './css/WeatherList.css';

const WeatherWidget = () => {

  const {data, loading} = useWeatherFetch(weatherApiLink);

  const weatherCards = data !== null ? data.list === undefined ? <NotFound/> : data.list.map((i, index) => <WeatherCard
    data={i} key={index}/>) : null
  return (<div>
    {loading ? <Preloader/> :
      <div className='content'>
        <h1 className='title'>Weather in Kharkiv on 5 closest days</h1>
        <div className="weather-list">
          {weatherCards}
        </div>
      </div>
    }
  </div>)
};

export default WeatherWidget;
