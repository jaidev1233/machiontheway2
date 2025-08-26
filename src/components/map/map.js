import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.css";

const BusMap = () => {
  return ( <center>
    <div className="map-container">
      <div className="map-header">
        <h2>Map View with Bus Location</h2>
        <div className="legend">
          <span className="dot bus"></span> Bus
          <span className="dot stop"></span> Stop
        </div>
      </div>

      <div className="map-wrapper">
        <MapContainer
          center={[-15, -40]} // default center (South Atlantic)
          zoom={3}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
        </MapContainer>
      </div>

      <div className="map-footer">
        <span>ETA: <strong>0 sec</strong></span>
        <span>Distance to Stop: <strong>0 m</strong></span>
        <span>Speed (est.): <strong>30 km/h</strong></span>
      </div>
    </div>
    </center>
  );
};

export default BusMap;
