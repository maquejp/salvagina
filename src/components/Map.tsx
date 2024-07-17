import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function MapComponent() {
  return (
    <MapContainer
      center={[40.727448, 0.836383]}
      zoom={19}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.727448, 0.836383]} title="Salvagina"></Marker>
    </MapContainer>
  );
}
