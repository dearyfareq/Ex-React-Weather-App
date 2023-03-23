//import useState for functionallity
//import axios to handle the timing and http requests
import "./App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";

//main function for the website
function App() {

  //two useStates, one for labeling the data.json and one for setting the location
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  //openWeather API url for data, key is hardwritten and location is a variable using useState
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c502a780facdc9c4209fe14bcca49d99`;

  //main function for searching IF the button pressed is enter!
  const search = (event) => {
    if (event.key === "Enter") {
      //run axios and then set the data useState
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
  var ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set to 12

  // Add leading zeros to minutes if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Build formatted time string
  var time = hours + ":" + minutes + " " + ampm;

  //main display html, using ternary conditions
  return (
    <div className="App">
      <div className="container">
      <input
        placeholder="City Name"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={search}
      />
      <div className="city-name">
        <h2>{data.name}</h2>
      </div>
      <div className="temp-weather">
        {/*using conditions for data, if the fetched data has data.main then access the data inside as such*/}
        {data.main ? <h1>{data.main.temp}K</h1> : null}
        {data.weather ? <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /> : null}
      </div>
      <div>
        
      </div>
      <div className="description">
      {data.weather ? <h2>{time}</h2>  : null} {data.weather ? <h2>{data.weather[0].description}</h2> : null}
      </div>
      </div>
    </div>
  );
}

export default App;
