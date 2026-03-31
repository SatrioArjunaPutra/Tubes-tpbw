import { useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  corridors,
  transitPoints,
  stats,
  MAP_CENTER,
  MAP_ZOOM,
} from "./data/routeData";
import CorridorLayer from "./components/CorridorLayer";
import Legend from "./components/Legend";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";

// Fix default marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Transit point icon
const transitIcon = L.divIcon({
  className: "custom-transit-icon",
  html: `<div style="
    width: 20px; height: 20px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 3px 12px rgba(255,165,0,0.6);
    position: relative;
  "><div style="
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 6px; height: 6px;
    background: white; border-radius: 50%;
  "></div></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -14],
});

// Selected stop highlight icon
const selectedIcon = L.divIcon({
  className: "custom-selected-icon",
  html: `<div class="selected-marker-pulse">
    <div class="selected-marker-inner"></div>
  </div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -22],
});

// Fly-to component
function FlyToStop({ stop }) {
  const map = useMap();
  if (stop) {
    map.flyTo([stop.lat, stop.lng], 17, { duration: 1.5 });
  }
  return null;
}

function App() {
  const [visibility, setVisibility] = useState(
    corridors.reduce((acc, c) => ({ ...acc, [c.id]: true }), {})
  );
  const [selectedStop, setSelectedStop] = useState(null);

  const toggleCorridor = (id) => {
    setVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectStop = useCallback((stop) => {
    setSelectedStop(stop);
    setTimeout(() => setSelectedStop(null), 10000);
  }, []);

  return (
    <div className="app-container">
      <Header stats={stats} />

      <div className="map-wrapper">
        <MapContainer
          center={MAP_CENTER}
          zoom={MAP_ZOOM}
          className="map-container"
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FlyToStop stop={selectedStop} />

          {corridors.map((corridor) => (
            <CorridorLayer
              key={corridor.id}
              corridor={corridor}
              visible={visibility[corridor.id]}
            />
          ))}

          {/* Transit points */}
          {transitPoints.map((tp, index) => {
            const anyVisible = tp.corridors.some((cId) => visibility[cId]);
            if (!anyVisible) return null;
            return (
              <Marker
                key={`transit-${index}`}
                position={[tp.lat, tp.lng]}
                icon={transitIcon}
              >
                <Tooltip direction="top" offset={[0, -12]} className="custom-tooltip">
                  🔄 {tp.name}
                </Tooltip>
                <Popup className="custom-popup">
                  <div className="popup-content">
                    <div className="popup-corridor-badge" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
                      Titik Transit
                    </div>
                    <h3 className="popup-title">{tp.name}</h3>
                    <p className="popup-type">🔄 Titik Transit Antar Koridor</p>
                    <div className="popup-corridors">
                      {tp.corridors.map((cId) => {
                        const c = corridors.find((cor) => cor.id === cId);
                        return (
                          <span key={cId} className="popup-corridor-tag" style={{ background: c.color }}>
                            {c.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          {/* Selected stop highlight */}
          {selectedStop && (
            <Marker position={[selectedStop.lat, selectedStop.lng]} icon={selectedIcon}>
              <Popup className="custom-popup" autoClose={false} autoPan={false}>
                <div className="popup-content">
                  <div className="popup-corridor-badge" style={{ background: "#e94560" }}>
                    📍 Hasil Pencarian
                  </div>
                  <h3 className="popup-title">{selectedStop.fullName || selectedStop.name}</h3>
                  {selectedStop.direction && (
                    <div className="popup-direction-badge" data-dir={selectedStop.direction}>
                      Halte {selectedStop.direction}
                    </div>
                  )}
                  <table className="popup-attrs">
                    <tbody>
                      <tr><td>Koridor</td><td>{selectedStop.corridorName}</td></tr>
                      <tr><td>Rute</td><td>{selectedStop.corridorRoute}</td></tr>
                      <tr><td>Jenis</td><td>{selectedStop.facility}</td></tr>
                      <tr><td>Sistem</td><td>{selectedStop.system}</td></tr>
                    </tbody>
                  </table>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>

        <SearchBar corridors={corridors} onSelectStop={handleSelectStop} />

        <Legend
          corridors={corridors}
          visibility={visibility}
          onToggle={toggleCorridor}
          stats={stats}
        />
      </div>
    </div>
  );
}

export default App;
