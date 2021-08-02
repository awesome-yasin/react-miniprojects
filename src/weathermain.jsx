import React, { useState } from "react";
import DisplayWeather from "./displayweather";
import "./weather.css";

const Weathermain = () =>{

    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
        city: "",
        country: ""
    })
    const APIKEY = 'd6b6975d326dfd018cad6d67aae1f571'

    async function weatherData(e){
        e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    }
    else{
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
          )
          .then((res) => res.json())
          .then((data) => data);
  
        setWeather({ data: data });
      }
    }

    const handleChange = (e) =>{
       let name = e.target.name
         let value = e.target.value

        if (name == "city") {
            setForm({ ...form, city: value });
          }
          if (name == "country") {
            setForm({ ...form, country: value });
          }
    }
    return(
        <>
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <input
        className = "effect-1"
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <span class="focus-border"></span>
        
        <button className="button button1" onClick={(e) => weatherData(e)}>
          Submit
        </button>
        </form>
        {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
        </div>
        </>
    )
}
export default Weathermain