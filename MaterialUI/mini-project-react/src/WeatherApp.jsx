import SearchBox from './SearchBox'
import Infobox from './Infobox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city: "Hyderabad",
        feels_like: 26.33,
        humidity: 26.28,
        temp: 26,
        weather: "cloudy",
    });


    let UpdateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App</h3>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    )
}