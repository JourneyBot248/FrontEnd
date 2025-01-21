import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pinImage from "../image/map-marker.png";

const pinIcon = new L.Icon({
  iconUrl: pinImage,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom]);
  return null;
};

const Map = ({ coordinates, path }) => {
  const [mapType, setMapType] = useState("roadmap");

  // Google Maps Tile URLs for different layers
  const tileLayerUrls = {
    roadmap: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    satellite: "http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
  };

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <MapContainer
        key={mapType} 
        center={coordinates}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeView center={coordinates} zoom={14} />

        <TileLayer
          url={tileLayerUrls[mapType]}
          attribution="&copy; Google Maps"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        {path.length > 0 &&
          path.map((location, index) => (
            <Marker key={index} position={[location.latitude, location.longitude]} icon={pinIcon}>
              <Popup autoPan={false}>
                <strong>Stop {index + 1}: {location.location_name}</strong>
                <br />
                {location.description}
                <br />
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(location.location_name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Search on Google
                </a>
              </Popup>
            </Marker>
          ))}

        {path.length > 1 && (
          <Polyline
            positions={path.map(location => [location.latitude, location.longitude])}
            color="blue"
            weight={5}
            opacity={0.75}
            lineCap="round"
            lineJoin="round"
          />
        )}
      </MapContainer>

      <button
        onClick={() => setMapType(mapType === "roadmap" ? "satellite" : "roadmap")}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {mapType === "roadmap" ? "Satellite View" : "Map View"}
      </button>
    </div>
  );
};

export default Map;
