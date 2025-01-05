import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pinImage from "../image/map-marker.png";

const pinIcon = new L.Icon({
  iconUrl: pinImage, 
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const Map = ({ coordinates, path }) => {
  return (
    <MapContainer
      center={coordinates || [37.5665, 126.9780]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Markers for each location in the path */}
      {path && path.map((coords, index) => (
        <Marker key={index} position={coords} icon={pinIcon}>
          <Popup>
            Stop {index + 1}: {coords.join(", ")}
          </Popup>
        </Marker>
      ))}

      {/* Polyline to draw the route */}
      {path && path.length > 1 && (
        <Polyline positions={path} color="blue" />
      )}
    </MapContainer>
  );
};

export default Map;
