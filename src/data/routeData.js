// Metro Jabar Trans - Complete Route Data
// Halte A = arah terminal awal → terminal tujuan
// Halte B = arah terminal tujuan → terminal awal
// Coordinates offset ~0.0002° (~22m) for A/B variants on opposite sides of road

// Helper: create A/B halte pair from a single location
function createHaltePair(name, lat, lng, corridorId, type = "halte") {
  const offset = 0.00025;
  return [
    {
      name: name,
      fullName: `${name} Halte A`,
      lat: lat + offset,
      lng: lng - offset,
      direction: "A",
      type,
      corridorId,
      facility: type === "terminal" ? "Terminal bus" : "Halte bus",
      system: "Metro Jabar Trans",
    },
    {
      name: name,
      fullName: `${name} Halte B`,
      lat: lat - offset,
      lng: lng + offset,
      direction: "B",
      type,
      corridorId,
      facility: type === "terminal" ? "Terminal bus" : "Halte bus",
      system: "Metro Jabar Trans",
    },
  ];
}

// ============================================================
// KORIDOR 1: Terminal Leuwipanjang – Soreang
// ============================================================
const k1Stops = [
  ...createHaltePair("Terminal Leuwipanjang", -6.9396, 107.5982, 1, "terminal"),
  ...createHaltePair("Leuwipanjang Soekarno Hatta", -6.9388, 107.5965, 1),
  ...createHaltePair("Hotel Grand Pasundan", -6.9420, 107.5910, 1),
  ...createHaltePair("Pasar Induk Caringin", -6.9385, 107.5888, 1),
  ...createHaltePair("Bumi Kopo Kencana", -6.9490, 107.5750, 1),
  ...createHaltePair("Sumbersari Junction", -6.9460, 107.5800, 1),
  ...createHaltePair("Mall Festival Citylink", -6.9280, 107.5960, 1),
  ...createHaltePair("Simpang Pasirkoja", -6.9430, 107.5830, 1),
  ...createHaltePair("SPBU Pasir Koja", -6.9500, 107.5760, 1),
  ...createHaltePair("Hotel Soreang", -6.9990, 107.5230, 1),
  ...createHaltePair("Mall Pelayanan Publik", -7.0020, 107.5200, 1),
  ...createHaltePair("Plaza Pemerintah Kabupaten Bandung", -7.0050, 107.5180, 1),
  ...createHaltePair("Simpang Desa Soreang", -7.0070, 107.5170, 1),
  ...createHaltePair("Pasar Ikan Modern", -7.0100, 107.5160, 1),
  ...createHaltePair("Rumah Sakit Umum Daerah Otto Iskandar Dinata", -7.0150, 107.5120, 1),
  ...createHaltePair("Kantor SAMSAT Soreang", -7.0180, 107.5100, 1),
  ...createHaltePair("Geo Dipa Energi", -7.0210, 107.5070, 1),
  ...createHaltePair("Pengendapan Bus Soreang", -7.0250, 107.5050, 1, "terminal"),
];

// ============================================================
// KORIDOR 2: Kota Baru Parahyangan – Alun-Alun Bandung
// ============================================================
const k2Stops = [
  ...createHaltePair("Kota Baru Parahyangan", -6.8420, 107.4930, 2, "terminal"),
  ...createHaltePair("IKEA Kota Baru Parahyangan", -6.8435, 107.4945, 2),
  ...createHaltePair("Wahoo Waterworld", -6.8500, 107.5000, 2),
  ...createHaltePair("Parahyangan Timur", -6.8520, 107.5020, 2),
  ...createHaltePair("Parahyangan Timur 2", -6.8535, 107.5040, 2),
  ...createHaltePair("Parahyangan Utara", -6.8545, 107.5055, 2),
  ...createHaltePair("Tatar Wangsakerta", -6.8560, 107.5070, 2),
  ...createHaltePair("Bale Pare", -6.8600, 107.5100, 2),
  ...createHaltePair("Stasiun Padalarang", -6.8630, 107.5130, 2),
  ...createHaltePair("STEI LPPM", -6.8660, 107.5160, 2),
  ...createHaltePair("RS Karisma Cimareme", -6.8690, 107.5200, 2),
  ...createHaltePair("RS IMC", -6.8710, 107.5240, 2),
  ...createHaltePair("Stasiun Gadobangkong", -6.8730, 107.5280, 2),
  ...createHaltePair("Masjid Ar Ridwan", -6.8750, 107.5300, 2),
  ...createHaltePair("Bank Rakyat Indonesia Cimahi", -6.8830, 107.5420, 2),
  ...createHaltePair("Rumah Sakit Umum Daerah Cibabat", -6.8870, 107.5500, 2),
  ...createHaltePair("Cimahi Tengah", -6.8890, 107.5550, 2),
  ...createHaltePair("Stasiun Cimahi", -6.8900, 107.5580, 2),
  ...createHaltePair("Cimahi Selatan", -6.8920, 107.5620, 2),
  ...createHaltePair("Dungus Cariang", -6.8950, 107.5700, 2),
  ...createHaltePair("Ciroyom", -6.9000, 107.5780, 2),
  ...createHaltePair("Stasiun Bandung", -6.9125, 107.6016, 2),
  ...createHaltePair("Pasar Baru", -6.9145, 107.6035, 2),
  ...createHaltePair("Rumah Sakit Kebon Jati", -6.9100, 107.5920, 2),
  ...createHaltePair("Lembong", -6.9150, 107.6070, 2),
  ...createHaltePair("Alun Alun Bandung", -6.9218, 107.6070, 2, "terminal"),
];

// ============================================================
// KORIDOR 3: Baleendah – Bandung Electronic Center (BEC)
// ============================================================
const k3Stops = [
  ...createHaltePair("Baleendah", -6.9900, 107.6320, 3, "terminal"),
  ...createHaltePair("Masjid Al Amanah", -6.9880, 107.6315, 3),
  ...createHaltePair("Rumah Sakit Al Ihsan", -6.9860, 107.6310, 3),
  ...createHaltePair("Kejaksaan Negeri Bale Bandung", -6.9840, 107.6305, 3),
  ...createHaltePair("Matahari Land", -6.9820, 107.6310, 3),
  ...createHaltePair("Masjid Jami Baitul Huda", -6.9800, 107.6315, 3),
  ...createHaltePair("Bubur Ayam Haji Amid", -6.9780, 107.6320, 3),
  ...createHaltePair("Borma Bojongsoang", -6.9700, 107.6350, 3),
  ...createHaltePair("SD Negeri Lengkong", -6.9680, 107.6345, 3),
  ...createHaltePair("Puskesmas Bojongsoang", -6.9660, 107.6340, 3),
  ...createHaltePair("SPBU Bojongsoang", -6.9640, 107.6335, 3),
  ...createHaltePair("Simpang Kersen", -6.9620, 107.6325, 3),
  ...createHaltePair("Telkom University", -6.9730, 107.6303, 3),
  ...createHaltePair("Puskesmas Kujangsari", -6.9600, 107.6310, 3),
  ...createHaltePair("Bluebird", -6.9580, 107.6300, 3),
  ...createHaltePair("Pasar Kordon", -6.9550, 107.6250, 3),
  ...createHaltePair("JAPNAS", -6.9530, 107.6230, 3),
  ...createHaltePair("PT Medal", -6.9510, 107.6210, 3),
  ...createHaltePair("PT LEN Industri", -6.9480, 107.6180, 3),
  ...createHaltePair("PT Industri Telekomunikasi Indonesia", -6.9460, 107.6160, 3),
  ...createHaltePair("Taman Tegallega", -6.9350, 107.6030, 3),
  ...createHaltePair("Sekolah Tinggi Hukum Bandung", -6.9320, 107.6050, 3),
  ...createHaltePair("SDN Pajajaran", -6.9290, 107.6055, 3),
  ...createHaltePair("Yogya Kepatihan", -6.9250, 107.6070, 3),
  ...createHaltePair("Alun Alun Bandung", -6.9218, 107.6070, 3),
  ...createHaltePair("Museum Kota Bandung", -6.9190, 107.6080, 3),
  ...createHaltePair("Stasiun Bandung", -6.9125, 107.6016, 3),
  ...createHaltePair("Bandung Electronic Center", -6.9020, 107.6110, 3, "terminal"),
];

// ============================================================
// KORIDOR 4: Terminal Leuwipanjang – Dago (UNPAD Dipatiukur)
// ============================================================
const k4Stops = [
  ...createHaltePair("Terminal Leuwipanjang", -6.9396, 107.5982, 4, "terminal"),
  ...createHaltePair("Rumah Sakit Immanuel", -6.9370, 107.6000, 4),
  ...createHaltePair("Pasar Tegallega", -6.9355, 107.6020, 4),
  ...createHaltePair("Taman Tegallega", -6.9350, 107.6030, 4),
  ...createHaltePair("RSIA Astana Anyar", -6.9310, 107.5990, 4),
  ...createHaltePair("Pasar Baru", -6.9260, 107.6040, 4),
  ...createHaltePair("Bank Indonesia Bandung", -6.9240, 107.6060, 4),
  ...createHaltePair("Balaikota Bandung", -6.9210, 107.6090, 4),
  ...createHaltePair("Bandung Indah Plaza", -6.9150, 107.6100, 4),
  ...createHaltePair("Bandung Electronic Center", -6.9020, 107.6110, 4),
  ...createHaltePair("Kartika Sari Dago", -6.8960, 107.6130, 4),
  ...createHaltePair("Rumah Sakit Santo Borromeus", -6.8920, 107.6140, 4),
  ...createHaltePair("UNIKOM", -6.8870, 107.6150, 4),
  ...createHaltePair("Universitas Padjadjaran Dipatiukur", -6.8850, 107.6170, 4, "terminal"),
];

// ============================================================
// KORIDOR 5: UNPAD Dipatiukur – UNPAD Jatinangor
// ============================================================
const k5Stops = [
  ...createHaltePair("Universitas Padjadjaran Dipatiukur", -6.8850, 107.6170, 5, "terminal"),
  ...createHaltePair("Dipatiukur Panatayuda", -6.8870, 107.6155, 5),
  ...createHaltePair("Institut Teknologi Bandung Ganesha", -6.8930, 107.6107, 5),
  ...createHaltePair("Lapangan Gasibu", -6.9020, 107.6189, 5),
  ...createHaltePair("Pusat Dakwah Islam", -6.9060, 107.6210, 5),
  ...createHaltePair("Lapangan Supratman", -6.9090, 107.6240, 5),
  ...createHaltePair("Taman Pramuka", -6.9110, 107.6260, 5),
  ...createHaltePair("Bandung Creative Hub", -6.9140, 107.6290, 5),
  ...createHaltePair("Hotel Horison", -6.9170, 107.6320, 5),
  ...createHaltePair("Ahmad Yani", -6.9200, 107.6350, 5),
  ...createHaltePair("PT Industri Telekomunikasi Indonesia", -6.9350, 107.6500, 5),
  ...createHaltePair("Simpang Bypass Soekarno Hatta", -6.9330, 107.6550, 5),
  ...createHaltePair("SPBU Moh Toha", -6.9340, 107.6620, 5),
  ...createHaltePair("Tol Padaleunyi", -6.9350, 107.6700, 5),
  ...createHaltePair("Cileunyi", -6.9320, 107.7200, 5),
  ...createHaltePair("Institut Pemerintahan Dalam Negeri", -6.9250, 107.7600, 5),
  ...createHaltePair("Jatinangor Town Square", -6.9260, 107.7700, 5),
  ...createHaltePair("Universitas Padjadjaran Jatinangor", -6.9270, 107.7750, 5, "terminal"),
];

// ============================================================
// KORIDOR 6: Terminal Leuwipanjang – Terminal Majalaya
// ============================================================
const k6Stops = [
  ...createHaltePair("Terminal Leuwipanjang", -6.9396, 107.5982, 6, "terminal"),
  ...createHaltePair("Rumah Sakit Immanuel", -6.9370, 107.6000, 6),
  ...createHaltePair("PT Industri Telekomunikasi Indonesia", -6.9350, 107.6500, 6),
  ...createHaltePair("Palasari Ceres", -6.9290, 107.6150, 6),
  ...createHaltePair("Zipur Dayeuhkolot", -6.9550, 107.6320, 6),
  ...createHaltePair("Borma Bojongsoang", -6.9700, 107.6350, 6),
  ...createHaltePair("Pasar Baleendah", -6.9900, 107.6320, 6),
  ...createHaltePair("Giri Harja Jelekong", -7.0000, 107.6380, 6),
  ...createHaltePair("Bumi Siliwangi", -7.0080, 107.6420, 6),
  ...createHaltePair("Terminal Ciparay", -7.0200, 107.6500, 6),
  ...createHaltePair("Griya Bandung Asri Majalaya", -7.0380, 107.6560, 6),
  ...createHaltePair("Terminal Majalaya", -7.0500, 107.6600, 6, "terminal"),
];

// ============================================================
// CORRIDOR DEFINITIONS
// ============================================================
export const corridors = [
  {
    id: 1,
    name: "Koridor 1",
    route: "Leuwipanjang – Soreang",
    color: "#2ecc71",
    operatingHours: "04.40 – 20.30 WIB",
    totalStopPoints: k1Stops.length,
    stops: k1Stops,
    path: [
      [-6.9396, 107.5982], [-6.9388, 107.5965], [-6.9420, 107.5910],
      [-6.9385, 107.5888], [-6.9460, 107.5800], [-6.9490, 107.5750],
      [-6.9350, 107.5940], [-6.9280, 107.5960], [-6.9430, 107.5830],
      [-6.9500, 107.5760], [-6.9550, 107.5680], [-6.9600, 107.5600],
      [-6.9700, 107.5500], [-6.9800, 107.5400], [-6.9900, 107.5300],
      [-6.9990, 107.5230], [-7.0020, 107.5200], [-7.0050, 107.5180],
      [-7.0070, 107.5170], [-7.0100, 107.5160], [-7.0150, 107.5120],
      [-7.0180, 107.5100], [-7.0210, 107.5070], [-7.0250, 107.5050],
    ],
  },
  {
    id: 2,
    name: "Koridor 2",
    route: "Kota Baru Parahyangan – Alun-Alun Bandung",
    color: "#e74c3c",
    operatingHours: "04.30 – 20.00 WIB",
    totalStopPoints: k2Stops.length,
    stops: k2Stops,
    path: [
      [-6.8420, 107.4930], [-6.8435, 107.4945], [-6.8500, 107.5000],
      [-6.8520, 107.5020], [-6.8535, 107.5040], [-6.8545, 107.5055],
      [-6.8560, 107.5070], [-6.8600, 107.5100], [-6.8630, 107.5130],
      [-6.8660, 107.5160], [-6.8690, 107.5200], [-6.8710, 107.5240],
      [-6.8730, 107.5280], [-6.8750, 107.5300], [-6.8830, 107.5420],
      [-6.8870, 107.5500], [-6.8890, 107.5550], [-6.8900, 107.5580],
      [-6.8920, 107.5620], [-6.8950, 107.5700], [-6.9000, 107.5780],
      [-6.9050, 107.5850], [-6.9100, 107.5920], [-6.9125, 107.6016],
      [-6.9145, 107.6035], [-6.9150, 107.6070], [-6.9218, 107.6070],
    ],
  },
  {
    id: 3,
    name: "Koridor 3",
    route: "Baleendah – BEC",
    color: "#9b59b6",
    operatingHours: "04.30 – 20.00 WIB",
    totalStopPoints: k3Stops.length,
    stops: k3Stops,
    path: [
      [-6.9900, 107.6320], [-6.9880, 107.6315], [-6.9860, 107.6310],
      [-6.9840, 107.6305], [-6.9820, 107.6310], [-6.9800, 107.6315],
      [-6.9780, 107.6320], [-6.9730, 107.6303], [-6.9700, 107.6350],
      [-6.9680, 107.6345], [-6.9660, 107.6340], [-6.9640, 107.6335],
      [-6.9620, 107.6325], [-6.9600, 107.6310], [-6.9580, 107.6300],
      [-6.9550, 107.6250], [-6.9530, 107.6230], [-6.9510, 107.6210],
      [-6.9480, 107.6180], [-6.9460, 107.6160], [-6.9350, 107.6030],
      [-6.9320, 107.6050], [-6.9290, 107.6055], [-6.9250, 107.6070],
      [-6.9218, 107.6070], [-6.9190, 107.6080], [-6.9125, 107.6016],
      [-6.9020, 107.6110],
    ],
  },
  {
    id: 4,
    name: "Koridor 4",
    route: "Leuwipanjang – Dago (UNPAD Dipatiukur)",
    color: "#3498db",
    operatingHours: "04.30 – 20.30 WIB",
    totalStopPoints: k4Stops.length,
    stops: k4Stops,
    path: [
      [-6.9396, 107.5982], [-6.9370, 107.6000], [-6.9355, 107.6020],
      [-6.9350, 107.6030], [-6.9310, 107.5990], [-6.9260, 107.6040],
      [-6.9240, 107.6060], [-6.9210, 107.6090], [-6.9150, 107.6100],
      [-6.9020, 107.6110], [-6.8960, 107.6130], [-6.8920, 107.6140],
      [-6.8870, 107.6150], [-6.8850, 107.6170],
    ],
  },
  {
    id: 5,
    name: "Koridor 5",
    route: "UNPAD Dipatiukur – UNPAD Jatinangor",
    color: "#e91e63",
    operatingHours: "04.30 – 20.00 WIB",
    totalStopPoints: k5Stops.length,
    stops: k5Stops,
    path: [
      [-6.8850, 107.6170], [-6.8870, 107.6155], [-6.8930, 107.6107],
      [-6.9020, 107.6189], [-6.9060, 107.6210], [-6.9090, 107.6240],
      [-6.9110, 107.6260], [-6.9140, 107.6290], [-6.9170, 107.6320],
      [-6.9200, 107.6350], [-6.9280, 107.6420], [-6.9350, 107.6500],
      [-6.9330, 107.6550], [-6.9340, 107.6620], [-6.9350, 107.6700],
      [-6.9340, 107.6900], [-6.9330, 107.7050], [-6.9320, 107.7200],
      [-6.9290, 107.7400], [-6.9250, 107.7600], [-6.9260, 107.7700],
      [-6.9270, 107.7750],
    ],
  },
  {
    id: 6,
    name: "Koridor 6",
    route: "Leuwipanjang – Majalaya",
    color: "#e67e22",
    operatingHours: "06.00 – 13.00 WIB",
    totalStopPoints: k6Stops.length,
    stops: k6Stops,
    path: [
      [-6.9396, 107.5982], [-6.9370, 107.6000], [-6.9350, 107.6030],
      [-6.9300, 107.6100], [-6.9290, 107.6150], [-6.9350, 107.6300],
      [-6.9350, 107.6500], [-6.9450, 107.6400], [-6.9550, 107.6320],
      [-6.9700, 107.6350], [-6.9800, 107.6340], [-6.9900, 107.6320],
      [-7.0000, 107.6380], [-7.0080, 107.6420], [-7.0200, 107.6500],
      [-7.0380, 107.6560], [-7.0500, 107.6600],
    ],
  },
];

// ============================================================
// TRANSIT POINTS (shared between corridors)
// ============================================================
export const transitPoints = [
  { name: "Terminal Leuwipanjang", lat: -6.9396, lng: 107.5982, corridors: [1, 4, 6] },
  { name: "Alun Alun Bandung", lat: -6.9218, lng: 107.6070, corridors: [2, 3] },
  { name: "Taman Tegallega", lat: -6.9350, lng: 107.6030, corridors: [3, 4] },
  { name: "Bandung Electronic Center", lat: -6.9020, lng: 107.6110, corridors: [3, 4] },
  { name: "Universitas Padjadjaran Dipatiukur", lat: -6.8850, lng: 107.6170, corridors: [4, 5] },
  { name: "Rumah Sakit Immanuel", lat: -6.9370, lng: 107.6000, corridors: [4, 6] },
  { name: "PT Industri Telekomunikasi Indonesia", lat: -6.9350, lng: 107.6500, corridors: [5, 6] },
  { name: "Borma Bojongsoang", lat: -6.9700, lng: 107.6350, corridors: [3, 6] },
  { name: "Stasiun Bandung", lat: -6.9125, lng: 107.6016, corridors: [2, 3] },
  { name: "Pasar Baru", lat: -6.9145, lng: 107.6035, corridors: [2, 4] },
];

// Build a flat list of all stops for search
export const allStops = corridors.flatMap((corridor) =>
  corridor.stops.map((stop) => ({
    ...stop,
    corridorName: corridor.name,
    corridorRoute: corridor.route,
    corridorColor: corridor.color,
    operatingHours: corridor.operatingHours,
  }))
);

// Get unique stop locations (deduplicated by name)
export const uniqueStopNames = [
  ...new Set(allStops.map((s) => s.name)),
];

// Summary statistics
export const stats = {
  totalCorridors: corridors.length,
  totalStopPoints: allStops.length,
  totalUniqueLocations: uniqueStopNames.length,
};

// Map center and default zoom
export const MAP_CENTER = [-6.93, 107.60];
export const MAP_ZOOM = 11;
