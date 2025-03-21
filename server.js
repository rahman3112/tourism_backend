const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const locations = {
  HYDERABAD: [
    { name: "Charminar", lat: 17.3616, lon: 78.4747, address: "Charminar, Hyderabad" },
    { name: "Golkonda Fort", lat: 17.3833, lon: 78.4011, address: "Golkonda, Hyderabad" }
  ],
  DELHI: [
    { name: "India Gate", lat: 28.6129, lon: 77.2295, address: "India Gate, Delhi" },
    { name: "Red Fort", lat: 28.6562, lon: 77.2410, address: "Red Fort, Delhi" }
  ],
  MUMBAI: [
    { name: "Gateway of India", lat: 18.9220, lon: 72.8347, address: "Mumbai, India" },
    { name: "Marine Drive", lat: 18.9430, lon: 72.8235, address: "Mumbai, India" }
  ],
  RAJASTHAN: [
    { name: "Hawa Mahal", lat: 26.9239, lon: 75.8267, address: "Jaipur, Rajasthan" },
    { name: "Jaisalmer Fort", lat: 26.9124, lon: 70.9127, address: "Jaisalmer, Rajasthan" }
  ],
  KASHMIR: [
    { name: "Dal Lake", lat: 34.0837, lon: 74.7973, address: "Srinagar, Kashmir" },
    { name: "Gulmarg", lat: 34.0481, lon: 74.3805, address: "Gulmarg, Kashmir" }
  ]
};

// API route to get locations
app.get("/locations/:city", (req, res) => {
  const city = req.params.city.toUpperCase();
  if (locations[city]) {
    res.json({ results: locations[city] });
  } else {
    res.status(404).json({ message: "City not found" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
