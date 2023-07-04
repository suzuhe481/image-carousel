import "./style.css";

import imageCarousel from "./components/imageCarousel/UI/imageCarousel";

const imageCollection = [
  "ramen1.jpg",
  "ramen2.jpg",
  "ramen3.jpg",
  "ramen4.jpg",
  "ramen5.jpg",
];

document.body.appendChild(imageCarousel());

export { imageCollection };
