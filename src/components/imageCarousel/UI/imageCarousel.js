import imageSlider from "../../imageSlider/UI/imageSlider";

import "./imageCarousel.css";

const imageCarousel = () => {
  const imageCarousel = document.createElement("div");

  const imageContainer = document.createElement("div");
  imageContainer.id = "imageContainer";

  // Sets to default first image.
  imageContainer.style.backgroundImage = "url(../src/images/ramen1.jpg)";

  imageCarousel.appendChild(imageContainer);

  const _imageSlider = imageSlider();
  imageCarousel.appendChild(_imageSlider);

  return imageCarousel;
};

export default imageCarousel;
