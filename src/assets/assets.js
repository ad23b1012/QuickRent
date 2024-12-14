import Camera from '../assets/Camera.png';
import Echodot from '../assets/echodot.png';
import Gopro from '../assets/Gopro.png';
import Laptop from '../assets/laptop.png';
import Mic from '../assets/Mic.png';
import Ps5 from '../assets/Ps5.png';
import Light from '../assets/light.png'
import Drone from '../assets/drone.png'
import Echo from '../assets/echodot.png'

export const assets = {
  Camera,
  Echodot,
  Gopro,
  Laptop,
  Mic,
  Ps5,
};

export const gadgets = [
  {
    id: 1,
    name: "Laptop",
    category: "product mobiles",
    price: "₹2000/day",
    features: "8GB RAM, 512GB SSD",
    image: Laptop,
  },
  {
    id: 2,
    name: "Camera",
    category: "category Cameras",
    price: "₹1500/day",
    features: "DSLR, 4K Video",
    image: Camera,
  },
  {
    id: 3,
    name: "GoPro",
    category: "product 360 Cameras",
    price: "₹2500/day",
    features: "4K Action Camera",
    image: Gopro,
  },
  {
    id: 4,
    name: "Lighting",
    category: "category Lighting",
    price: "₹3000/day",
    features: "Studio Lighting",
    image: Light,
  },
  {
    id: 5,
    name: "Playstation 5",
    category: "product playstations",
    price: "₹5000/day",
    features: "PS5 Console",
    image: Ps5,
  },
  {
    id: 6,
    name: "Drone",
    category: "category Drones",
    price: "₹4000/day",
    features: "DJI Phantom 4",
    image: Drone,
  },
  {
    id: 7,
    name: "Microphone",
    category: "category Audio",
    price: "₹1500/day",
    features: "Studio Quality Mic",
    image: Mic,
  },
  {
    id: 8,
    name: "Echo Dot",
    category: "product iots",
    price: "₹300/day",
    features: "IOT Device",
    image: Echo,
  },
  {
    id: 9,
    name: "Gaming Laptop",
    category: "product mobiles",
    price: "₹4500/day",
    features: "32GB RAM, 1TB SSD",
    image: Laptop,
  },
  // More gadgets can be added here...
];
