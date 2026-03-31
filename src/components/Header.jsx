function Header({ stats }) {
    return (
        <header className="app-header">
            <div className="header-content">
                <div className="header-logo">
                    <span className="header-bus-icon">🚍</span>
                    <div>
                        <h1>Peta Rute Metro Jabar Trans</h1>
                        <p className="header-subtitle">
                            Sistem Bus Rapid Transit — Bandung Raya, Jawa Barat
                        </p>
                    </div>
                </div>
                <div className="header-stats">
                    <div className="header-badge">
                        <span>{stats?.totalCorridors || 6} Koridor</span>
                        <span className="header-divider">|</span>
                        <span>{stats?.totalStopPoints || 0} Titik Halte</span>
                        <span className="header-divider">|</span>
                        <span>{stats?.totalUniqueLocations || 0} Lokasi</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
