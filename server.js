const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const locations = {
  HYDERABAD: [
    {
      name: "Charminar",
      lat: 17.3616,
      lon: 78.4747,
      address: "Charminar, Old City, Hyderabad",
      description: "A major landmark of Hyderabad with four graceful minarets, built by Muhammed Quli Qutb Shah as a memorial for plague victims."
    },
    {
      name: "Mecca Masjid",
      lat: 17.3642,
      lon: 78.4762,
      address: "Near Charminar, Old City, Hyderabad",
      description: "A symbolic mosque built 400 years ago during the reign of Sultan Muhammad Qutub Shah."
    },
    {
      name: "Birla Mandir",
      lat: 17.4127,
      lon: 78.4733,
      address: "Hill Fort Rd, Ambedkar Colony, Khairatabad, Hyderabad",
      description: "A beautiful Hindu temple dedicated to Lord Venkateswara, offering a serene atmosphere and stunning architecture."
    },
    {
      name: "Golkonda Fort",
      lat: 17.3833,
      lon: 78.4011,
      address: "Golkonda, Hyderabad",
      description: "A ruined fort once the capital of the medieval Golconda Sultanate, known for its architectural beauty and acoustics."
    },
    {
      name: "Hussain Sagar Lake",
      lat: 17.4167,
      lon: 78.4867,
      address: "Tank Bund Rd, Hussain Sagar, Hyderabad",
      description: "A famous lake in Hyderabad with a large monolithic statue of Gautam Buddha in the middle."
    },
    {
      name: "Salar Jung Museum",
      lat: 17.3679,
      lon: 78.4722,
      address: "Salar Jung Rd, Darul Shifa, Hyderabad",
      description: "One of the most prominent national museums in India, housing the largest one-man collection of antiques in the world."
    },
    {
      name: "Laad Bazaar",
      lat: 17.3612,
      lon: 78.4752,
      address: "Char Kaman, Ghansi Bazaar, Hyderabad",
      description: "A famous and historic market known for its shopping souvenirs and bangles, located adjacent to Charminar."
    },
    {
      name: "KBR National Park",
      lat: 17.4277,
      lon: 78.4199,
      address: "Road No 2, Banjara Hills, Hyderabad",
      description: "A world-famous national park boasting picturesque beauty and a wide variety of flora, fauna, and avifauna."
    },
    {
      name: "Snow World",
      lat: 17.4186,
      lon: 78.4703,
      address: "Lower Tank Bund Rd, Hussain Sagar, Hyderabad",
      description: "An exciting attraction that stands as the only place in the city where it snows year-round."
    },
    {
      name: "Osman Sagar Lake",
      lat: 17.3267,
      lon: 78.2917,
      address: "Gandipet, Hyderabad",
      description: "A famous tourist destination surrounded by gardens and a pool, making it an ideal spot for picnics."
    },
    {
      name: "Taramati Baradari",
      lat: 17.3422,
      lon: 78.4067,
      address: "Ibrahim Bagh, Hyderabad",
      description: "An ancient sarai (resting place) built during the reign of Ibrahim Quli Qutub Shah."
    },
    {
      name: "Chowmahalla Palace",
      lat: 17.3592,
      lon: 78.4683,
      address: "20-4-236, Motigalli, Khilwat, Hyderabad",
      description: "A grand palace that was once the residence of the Nizam of Hyderabad, now a luxury heritage hotel."
    },
    {
      name: "Nehru Zoological Park",
      lat: 17.3329,
      lon: 78.4347,
      address: "Bahadurpura, Hyderabad",
      description: "One of India's largest zoos and top attractions for visitors, housing a variety of wildlife."
    }
  ],
  DELHI: [
    {
      name: "India Gate",
      lat: 28.6129,
      lon: 77.2295,
      address: "Rajpath, India Gate, New Delhi",
      description: "A war memorial dedicated to soldiers who died in World War I, located in the heart of Delhi."
    },
    {
      name: "Red Fort",
      lat: 28.6562,
      lon: 77.2410,
      address: "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi",
      description: "A UNESCO World Heritage site, the Red Fort was the main residence of Mughal emperors."
    },
    {
      name: "Qutub Minar",
      lat: 28.5245,
      lon: 77.1855,
      address: "Seth Sarai, Mehrauli, New Delhi",
      description: "A UNESCO World Heritage site, Qutub Minar is a historic monument and a famous tourist attraction."
    },
    {
      name: "Humayun's Tomb",
      lat: 28.5933,
      lon: 77.2507,
      address: "Mathura Road, Nizamuddin, New Delhi",
      description: "A UNESCO World Heritage site, this tomb is a gorgeous work of art and an inspiration to the design of the Taj Mahal."
    },
    {
      name: "Jama Masjid",
      lat: 28.6507,
      lon: 77.2334,
      address: "Jama Masjid Rd, Jama Masjid, Chandni Chowk, New Delhi",
      description: "One of the largest mosques in India, Jama Masjid is a famous tourist attraction and a place of worship."
    },
    {
      name: "Lotus Temple",
      lat: 28.5535,
      lon: 77.2588,
      address: "Lotus Temple Rd, Bahapur, Shambhu Dayal Bagh, Kalkaji, New Delhi",
      description: "A Bahai temple known for its lotus-shaped architecture, open to people of all religions and beliefs."
    },
    {
      name: "Akshardham Temple",
      lat: 28.6125,
      lon: 77.2769,
      address: "NH 24, Akshardham Setu, New Delhi",
      description: "A temple dedicated to Swaminarayan, reflecting India's ancient culture, traditions, and contributions over a span of 10,000 years."
    },
    {
      name: "Jantar Mantar",
      lat: 28.6279,
      lon: 77.2180,
      address: "Sansad Marg, Connaught Place, New Delhi",
      description: "An astronomical observatory built by Maharaja Jai Singh II of Jaipur, featuring 13 architectural astronomy instruments."
    },
    {
      name: "Rashtrapati Bhawan",
      lat: 28.6149,
      lon: 77.2018,
      address: "Rashtrapati Bhawan, President's Estate, New Delhi",
      description: "The official residence of the President of India, a famous monument of the British Empire."
    },
    {
      name: "Connaught Place",
      lat: 28.6304,
      lon: 77.2177,
      address: "Connaught Place, New Delhi",
      description: "A massive financial center in the heart of New Delhi, housing famous international brand stores, food chains, restaurants, and bars."
    },
    {
      name: "Chandni Chowk",
      lat: 28.6503,
      lon: 77.2324,
      address: "Chandni Chowk, Old Delhi, New Delhi",
      description: "A famous marketplace in Old Delhi, known for its vibrant atmosphere, street food, and shopping."
    },
    {
      name: "Hauz Khas Village",
      lat: 28.5448,
      lon: 77.1976,
      address: "Hauz Khas Village, New Delhi",
      description: "A trendy neighborhood known for its historic monument, deer park, and vibrant shopping and dining scene."
    }
  ],
  MUMBAI: [
    {
      name: "Gateway of India",
      lat: 18.9220,
      lon: 72.8347,
      address: "Apollo Bandar, Colaba, Mumbai",
      description: "A historic monument built during the British Raj, overlooking the Arabian Sea."
    },
    {
      name: "Marine Drive",
      lat: 18.9348,
      lon: 72.8224,
      address: "Marine Drive, Mumbai",
      description: "A scenic promenade along the Arabian Sea, known for its beautiful sunsets and Art Deco buildings."
    },
    {
      name: "Chhatrapati Shivaji Maharaj Terminus",
      lat: 18.9388,
      lon: 72.8353,
      address: "Chhatrapati Shivaji Terminus Area, Fort, Mumbai",
      description: "A UNESCO World Heritage site, this historic railway station is an example of Victorian Gothic Revival architecture."
    },
    {
      name: "Elephanta Caves",
      lat: 18.9654,
      lon: 72.9319,
      address: "Gharapuri, Mumbai",
      description: "A UNESCO World Heritage site, these ancient rock-cut caves feature Hindu and Buddhist sculptures."
    },
    {
      name: "Haji Ali Dargah",
      lat: 18.9803,
      lon: 72.8110,
      address: "Dargah Rd, Haji Ali, Mumbai",
      description: "A famous mosque and dargah located on an islet off the coast of Worli, known for its stunning architecture."
    },
    {
      name: "Siddhivinayak Temple",
      lat: 19.0192,
      lon: 72.8383,
      address: "SK Bole Marg, Prabhadevi, Mumbai",
      description: "A famous Hindu temple dedicated to Lord Ganesha, attracting thousands of devotees every day."
    },
    {
      name: "Juhu Beach",
      lat: 19.0884,
      lon: 72.8273,
      address: "Juhu Tara Rd, Juhu, Mumbai",
      description: "A popular beach known for its street food, especially the famous Mumbai-style bhelpuri and pani puri."
    },
    {
      name: "Colaba Causeway",
      lat: 18.9207,
      lon: 72.8314,
      address: "Colaba Causeway, Mumbai",
      description: "A bustling marketplace known for its shopping, dining, and historic buildings."
    },
    {
      name: "Bandra-Worli Sea Link",
      lat: 19.0324,
      lon: 72.8258,
      address: "Bandra-Worli Sea Link, Mumbai",
      description: "An iconic cable-stayed bridge connecting Bandra and Worli, offering stunning views of the Arabian Sea."
    },
    {
      name: "Sanjay Gandhi National Park",
      lat: 19.2145,
      lon: 72.9106,
      address: "Borivali East, Mumbai",
      description: "A protected area known for its rich biodiversity, including the famous Kanheri Caves."
    }
  ],
  RAJASTHAN: [
    {
      name: "Hawa Mahal",
      lat: 26.9245,
      lon: 75.8244,
      address: "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur",
      description: "A famous palace known for its unique architecture and intricate design, resembling a honeycomb."
    },
    {
      name: "Amber Fort",
      lat: 26.9855,
      lon: 75.8515,
      address: "Devisinghpura, Amer, Jaipur",
      description: "A historic fort known for its stunning architecture, including the Sheesh Mahal (Mirror Palace)."
    },
    {
      name: "City Palace, Jaipur",
      lat: 26.9256,
      lon: 75.8238,
      address: "Tulsi Marg, Gangori Bazaar, J.D.A. Market, Pink City, Jaipur",
      description: "A grand palace complex featuring a blend of Rajput and Mughal architecture, housing museums and gardens."
    },
    {
      name: "Jantar Mantar, Jaipur",
      lat: 26.9248,
      lon: 75.8253,
      address: "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur",
      description: "A UNESCO World Heritage site, this astronomical observatory features 19 architectural instruments."
    },
    {
      name: "Mehrangarh Fort",
      lat: 26.2982,
      lon: 73.0175,
      address: "P.B # 165, The Fort, Jodhpur",
      description: "A historic fort known for its impressive architecture and stunning views of the Blue City."
    },
    {
      name: "Umaid Bhawan Palace",
      lat: 26.2587,
      lon: 73.0319,
      address: "Circuit House Rd, Cantt Area, Jodhpur",
      description: "A luxurious palace hotel known for its grandeur and opulence, offering a glimpse into royal life."
    },
    {
      name: "Lake Pichola",
      lat: 24.5762,
      lon: 73.6812,
      address: "Udaipur",
      description: "A picturesque lake surrounded by palaces, temples, and hills, offering boat rides and stunning views."
    },
    {
      name: "Jag Mandir",
      lat: 24.5697,
      lon: 73.6769,
      address: "Pichola, Udaipur",
      description: "A beautiful palace located on an island in Lake Pichola, known for its stunning architecture and gardens."
    },
    {
      name: "Jaisalmer Fort",
      lat: 26.9124,
      lon: 70.9088,
      address: "Fort Rd, Near Gopa Chowk, Amar Sagar Pol, Jaisalmer",
      description: "A historic fort known for its golden sandstone walls and stunning views of the Golden City."
    },
    {
      name: "Patwon Ki Haveli",
      lat: 26.9096,
      lon: 70.9067,
      address: "Patwa Complex, Patwa Haveli Rd, Sadar Bazar, Jaisalmer",
      description: "A cluster of five havelis known for their intricate carvings and stunning architecture."
    }
  ],
  KASHMIR: [
    {
      name: "Dal Lake",
      lat: 34.0942,
      lon: 74.8536,
      address: "Dal Lake, Srinagar",
      description: "A famous lake known for its houseboats, shikaras, and stunning views of the surrounding mountains."
    },
    {
      name: "Gulmarg",
      lat: 34.0500,
      lon: 74.3800,
      address: "Gulmarg, Jammu and Kashmir",
      description: "A popular ski resort and hill station known for its snow-capped peaks and scenic beauty."
    },
    {
      name: "Pahalgam",
      lat: 34.0167,
      lon: 75.3000,
      address: "Pahalgam, Jammu and Kashmir",
      description: "A picturesque valley known for its lush greenery, rivers, and adventure activities like trekking and rafting."
    },
    {
      name: "Sonamarg",
      lat: 34.3000,
      lon: 75.2833,
      address: "Sonamarg, Jammu and Kashmir",
      description: "A scenic hill station known for its glaciers, lakes, and stunning views of the Himalayas."
    },
    {
      name: "Shalimar Bagh",
      lat: 34.1083,
      lon: 74.8853,
      address: "Shalimar Bagh, Srinagar",
      description: "A famous Mughal garden known for its terraced layout, fountains, and beautiful flowers."
    },
    {
      name: "Nishat Bagh",
      lat: 34.0958,
      lon: 74.8556,
      address: "Nishat Bagh, Srinagar",
      description: "A beautiful Mughal garden located on the eastern side of Dal Lake, known for its terraced layout and stunning views."
    },
    {
      name: "Chashme Shahi",
      lat: 34.0875,
      lon: 74.8464,
      address: "Chashme Shahi, Srinagar",
      description: "A famous garden known for its natural spring and stunning views of the surrounding mountains."
    },
    {
      name: "Hazratbal Shrine",
      lat: 34.1464,
      lon: 74.8356,
      address: "Hazratbal, Srinagar",
      description: "A famous Muslim shrine known for housing a relic believed to be a hair of the Islamic prophet Muhammad."
    },
    {
      name: "Jama Masjid, Srinagar",
      lat: 34.0806,
      lon: 74.8056,
      address: "Nowhatta, Srinagar",
      description: "A famous mosque known for its Indo-Saracenic architecture and stunning views of the surrounding mountains."
    },
    {
      name: "Leh Palace",
      lat: 34.1603,
      lon: 77.5839,
      address: "Leh, Jammu and Kashmir",
      description: "A historic palace known for its stunning architecture and panoramic views of the surrounding mountains."
    }
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
