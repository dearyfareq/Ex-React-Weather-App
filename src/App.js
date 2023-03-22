import "./App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";



function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c502a780facdc9c4209fe14bcca49d99`;

  const search = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((responce) => {
          setData(responce.data);
          console.log(responce.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  // Get current date and time
var today = new Date();

// Get hours and minutes from date object
var hours = today.getHours();
var minutes = today.getMinutes();

// Set AM/PM based on hour value
var ampm = hours >= 12 ? 'PM' : 'AM';

// Convert hours to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // If hour is 0, set to 12

// Add leading zeros to minutes if needed
minutes = minutes < 10 ? '0' + minutes : minutes;

// Build formatted time string
var time = hours + ':' + minutes + ' ' + ampm;


  return (
    <div className="App">
      <input 
      placeholder="City Name" 
      type="text" 
      value={location}
      onChange={ (e) => setLocation(e.target.value)}
      onKeyPress={search}/>
      <div>
        <h2>{data.name}</h2>
      </div>
      <div>
        <h1>{data.main.temp}K</h1>
        <h2>{data.weather[0].main}</h2>
      </div>
      <div>
        <h2>{data.weather[0].description}</h2>
      </div>
      <div>
        <h2>{time}</h2>
      </div>
    </div>
  );
}

export default App;
