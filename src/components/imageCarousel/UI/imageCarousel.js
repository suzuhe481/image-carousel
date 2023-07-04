import imageSlider from "../../imageSlider/UI/imageSlider";

import { imageCollection } from "../../..";

import "./imageCarousel.css";

const imageCarousel = () => {
  const imageCarousel = document.createElement("div");

  const imageContainer = document.createElement("div");
  imageContainer.id = "imageContainer";

  // Sets to default first image.
  var imageURL = "url('/src/images/" + imageCollection[0];
  imageContainer.style.backgroundImage = imageURL;

  imageCarousel.appendChild(imageContainer);

  const _imageSlider = imageSlider();
  imageCarousel.appendChild(_imageSlider);

  return imageCarousel;
};

export default imageCarousel;
