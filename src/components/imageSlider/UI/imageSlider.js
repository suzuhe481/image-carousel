import imageSliderHandler from "../functions/imageSliderHandler";

import { imageCollection } from "../../..";

import "./imageSlider.css";

const imageSlider = () => {
  const imageSlider = document.createElement("ul");

  // Previous image button
  const prevImageItem = document.createElement("li");
  const prevImageSymbol = document.createElement("button");
  prevImageSymbol.id = "back-arrow";
  prevImageSymbol.innerHTML = "<";
  prevImageSymbol.addEventListener("click", imageSliderHandler);
  prevImageItem.appendChild(prevImageSymbol);

  // Next iamge button
  const nextImageItem = document.createElement("li");
  const nextImageSymbol = document.createElement("button");
  nextImageSymbol.id = "forward-arrow";
  nextImageSymbol.innerHTML = ">";
  nextImageSymbol.addEventListener("click", imageSliderHandler);
  nextImageItem.appendChild(nextImageSymbol);

  // Appends back arrow.
  imageSlider.appendChild(prevImageItem);

  // Creates navigation dot for each image.
  for (var i = 0; i < imageCollection.length; i++) {
    const navDot = document.createElement("li");
    navDot.dataset.index = i + 1;
    navDot.addEventListener("click", imageSliderHandler);

    navDot.classList.add("nav-dot");

    // Adds active navigation dot to first dot on initial load.
    if (i == 0) {
      navDot.classList.add("active");
    }

    imageSlider.appendChild(navDot);
  }

  // Appends next arrow.
  imageSlider.appendChild(nextImageItem);

  return imageSlider;
};

export default imageSlider;
