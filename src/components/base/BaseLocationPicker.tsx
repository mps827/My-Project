import { MapContainer, TileLayer, Circle } from "react-leaflet";

import classes from "./style/BaseLocationPicker.module.scss";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
interface location {
  lat: number;
  lng: number;
}
interface MyComponentProps {
  zoom: number;
  center: [number, number];
  geoData: Array<location>;
}

const BaseLocationPicker = (props: MyComponentProps) => {
  const mapUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  return (
    <div className={classes.LocationContainer}>
      <MapContainer
        style={{ display: "flex", height: "600px", width: "600px" }}
        center={props.center}
        zoom={props.zoom}
        scrollWheelZoom={true}
      >
        <TileLayer url={mapUrl} />
        {props.geoData.map((elem, i) => {
          return (
            <Circle
	      key={i}
              center={{
                lat: elem.lat,
                lng: elem.lng,
              }}
              fillColor="blue"
              radius={200}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};
export default BaseLocationPicker;
