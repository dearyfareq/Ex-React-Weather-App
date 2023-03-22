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

  return (
    <div className="App">
      <input 
      placeholder="City Name" 
      type="text" 
      value={location}
      onChange={ (e) => setLocation(e.target.value)}
      onKeyPress={search}/>
      <div>
        <h2>dallas</h2>
      </div>
      <div>
        <h1>200f</h1>
        <h2>weather</h2>
      </div>
      <div>
        <h2>discription</h2>
      </div>
      <div>
        <h2>time</h2>
      </div>
    </div>
  );
}

export default App;
