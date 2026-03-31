import { useState } from "react";

function Legend({ corridors, visibility, onToggle, stats }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`legend-panel ${collapsed ? "collapsed" : ""}`}>
            <div className="legend-header" onClick={() => setCollapsed(!collapsed)}>
                <h3>
                    <span className="legend-icon">🗺️</span>
                    Koridor MJT
                </h3>
                <button className="legend-toggle">{collapsed ? "▶" : "▼"}</button>
            </div>

            {!collapsed && (
                <div className="legend-body">
                    {/* Stats */}
                    {stats && (
                        <div className="legend-stats">
                            <div className="stat-item">
                                <span className="stat-value">{stats.totalCorridors}</span>
                                <span className="stat-label">Koridor</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{stats.totalStopPoints}</span>
                                <span className="stat-label">Titik Halte</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{stats.totalUniqueLocations}</span>
                                <span className="stat-label">Lokasi</span>
                            </div>
                        </div>
                    )}

                    {/* Corridors */}
                    {corridors.map((corridor) => (
                        <label
                            key={corridor.id}
                            className={`legend-item ${visibility[corridor.id] ? "active" : "inactive"}`}
                        >
                            <input
                                type="checkbox"
                                checked={visibility[corridor.id]}
                                onChange={() => onToggle(corridor.id)}
                            />
                            <span className="legend-color" style={{ background: corridor.color }} />
                            <div className="legend-info">
                                <span className="legend-name">{corridor.name}</span>
                                <span className="legend-route">{corridor.route}</span>
                                <span className="legend-hours">⏰ {corridor.operatingHours}</span>
                                <span className="legend-stop-count">
                                    📍 {corridor.totalStopPoints} titik halte
                                </span>
                            </div>
                        </label>
                    ))}

                    {/* Symbols */}
                    <div className="legend-symbols">
                        <h4>Simbol</h4>
                        <div className="symbol-row">
                            <div className="symbol-terminal" />
                            <span>Terminal</span>
                        </div>
                        <div className="symbol-row">
                            <div className="symbol-stop" />
                            <span>Halte</span>
                        </div>
                        <div className="symbol-row">
                            <div className="symbol-transit" />
                            <span>Titik Transit</span>
                        </div>
                        <div className="symbol-row">
                            <span className="symbol-dir-a">A</span>
                            <span>Halte A (Arah Tujuan)</span>
                        </div>
                        <div className="symbol-row">
                            <span className="symbol-dir-b">B</span>
                            <span>Halte B (Arah Kembali)</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Legend;
