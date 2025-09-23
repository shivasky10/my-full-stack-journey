import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({UpdateInfo}){

    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    let URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "4d12c74ad5d3e4bc7d74d96e02e30295"

    let getWeatherInfo = async ()=>{
        try{
        let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json()
        console.log(jsonResponse);
        let result = {
            City : jsonResponse.name,
            humidity : jsonResponse.main.temp,
            pressure: jsonResponse.main.pressure,
            feels_like : jsonResponse.main.feels_like,
            temp: jsonResponse.main.temp,
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    }

    let handleChange = (evt)=>{
        setCity((evt.target.value));
    };

    let handleSubmit = async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        UpdateInfo(newinfo);
        }catch(err){
            setError(true)
        }
    };
    return(
        <div className='SearchBox'>
        
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button type='submit' variant="contained" >Search</Button>
        {error && <h3 style={{color:"red"}}>Place Not Found </h3>}
        </form>
        </div>
    )
}