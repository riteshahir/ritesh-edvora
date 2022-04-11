import "../App.css";
import React from "react";
const fs = require('fs');

function NearestRide() {

  var data;

  fs.readFile("users.json",(err,data_) => {
    if(err){
      throw err;
    }
    data=JSON.parse(data_);
  })

  return (
    <div className="card">
      <div className="card-img">
        <img src="https://picsum.photos/200" alt="card-img" />
      </div>
      <div className="card-detail">
        <p>Ride Id: {data.Ride.id}</p>
        <p>Origin Station:</p>
        <p>station_path:</p>
        <p>Date:</p>
        <p>Distance:</p>
      </div>
      <div className="card-place">
        <p>city name</p>
        <p>state name</p>
      </div>
    </div>
  );
}

export default NearestRide;
