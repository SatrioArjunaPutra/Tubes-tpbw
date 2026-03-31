import { Polyline, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

// Create custom bus stop icon with A/B indicator
const createStopIcon = (color, direction) =>
    L.divIcon({
        className: "custom-stop-icon",
        html: `<div style="
      position: relative;
      width: 14px;
      height: 14px;
      background: ${color};
      border: 2.5px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    ">
      <span style="
        position: absolute;
        top: -8px;
        right: -10px;
        font-size: 8px;
        font-weight: 800;
        color: ${direction === "A" ? "#2ecc71" : "#e74c3c"};
        background: white;
        border-radius: 3px;
        padding: 0 2px;
        line-height: 1.2;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      ">${direction}</span>
    </div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -10],
    });

// Create terminal icon
const createTerminalIcon = (color, direction) =>
    L.divIcon({
        className: "custom-terminal-icon",
        html: `<div style="
      position: relative;
      width: 24px;
      height: 24px;
      background: ${color};
      border: 3px solid white;
      border-radius: 5px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
      </svg>
      <span style="
        position: absolute;
        top: -8px;
        right: -10px;
        font-size: 8px;
        font-weight: 800;
        color: ${direction === "A" ? "#2ecc71" : "#e74c3c"};
        background: white;
        border-radius: 3px;
        padding: 0 2px;
        line-height: 1.2;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      ">${direction}</span>
    </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -14],
    });

function CorridorLayer({ corridor, visible }) {
    if (!visible) return null;

    return (
        <>
            {/* Route polyline */}
            <Polyline
                positions={corridor.path}
                pathOptions={{
                    color: corridor.color,
                    weight: 5,
                    opacity: 0.85,
                    lineCap: "round",
                    lineJoin: "round",
                }}
            />

            {/* All halt stops (A and B) */}
            {corridor.stops.map((stop, index) => {
                const icon =
                    stop.type === "terminal"
                        ? createTerminalIcon(corridor.color, stop.direction)
                        : createStopIcon(corridor.color, stop.direction);

                return (
                    <Marker
                        key={`${corridor.id}-${index}`}
                        position={[stop.lat, stop.lng]}
                        icon={icon}
                    >
                        <Tooltip
                            direction="top"
                            offset={[0, -10]}
                            className="custom-tooltip"
                            permanent={false}
                        >
                            {stop.fullName}
                        </Tooltip>
                        <Popup className="custom-popup">
                            <div className="popup-content">
                                <div
                                    className="popup-corridor-badge"
                                    style={{ background: corridor.color }}
                                >
                                    {corridor.name}
                                </div>
                                <h3 className="popup-title">{stop.name}</h3>
                                <div className="popup-direction-badge" data-dir={stop.direction}>
                                    Halte {stop.direction}
                                </div>
                                <table className="popup-attrs">
                                    <tbody>
                                        <tr>
                                            <td>Arah</td>
                                            <td>
                                                {stop.direction === "A"
                                                    ? "Terminal Awal → Tujuan"
                                                    : "Terminal Tujuan → Awal"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jenis</td>
                                            <td>{stop.facility}</td>
                                        </tr>
                                        <tr>
                                            <td>Sistem</td>
                                            <td>{stop.system}</td>
                                        </tr>
                                        <tr>
                                            <td>Rute</td>
                                            <td>{corridor.route}</td>
                                        </tr>
                                        <tr>
                                            <td>Jam</td>
                                            <td>{corridor.operatingHours}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </>
    );
}

export default CorridorLayer;
