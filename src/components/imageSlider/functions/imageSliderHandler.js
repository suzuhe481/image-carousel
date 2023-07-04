import { imageCollection } from "../../..";

var imageIndex = 1;
var timerLength = 5000; // In milliseconds.
var imageTimer; // Assigned at the bottom of page, before export.

// Resets the timer to advance to next image.
const resetImageAdvanceTimer = () => {
  clearInterval(imageTimer);

  imageTimer = setInterval(nextImage, timerLength);
};

// Adds active class to current image dot.
const moveHighlightedDot = () => {
  const activeDot = document.getElementsByClassName("active");
  activeDot[0].classList.remove("active");

  const dotToMoveTo = document.getElementsByClassName("nav-dot");

  dotToMoveTo[imageIndex - 1].classList.add("active");
};

// Moves to previous image.
const prevImage = () => {
  imageIndex = parseInt(imageIndex) - 1;
  if (imageIndex <= 0) {
    imageIndex = imageCollection.length;
  }

  changeimagetoCurrentIndex();

  moveHighlightedDot();
};

// MOves to next image.
const nextImage = () => {
  imageIndex = parseInt(imageIndex) + 1;
  if (imageIndex >= imageCollection.length + 1) {
    imageIndex = 1;
  }

  changeimagetoCurrentIndex();

  moveHighlightedDot();
};

// Changes the displayed image to the image at the current index.
const changeimagetoCurrentIndex = () => {
  var imageURL = "url('/src/images/" + imageCollection[imageIndex - 1];

  imageContainer.style.backgroundImage = imageURL;
};

// Changes imageIndex to index of clicked nav dot.
const navDotClicked = () => {
  const clickedDot = event.srcElement;
  imageIndex = clickedDot.dataset["index"];

  moveHighlightedDot();

  changeimagetoCurrentIndex();
};

const imageSliderHandler = (event) => {
  resetImageAdvanceTimer();

  if (event.srcElement.id == "back-arrow") {
    prevImage();
  } else if (event.srcElement.id == "forward-arrow") {
    nextImage();
  } else {
    navDotClicked(event);
  }
};

// Timer to advance to next image.
imageTimer = setInterval(nextImage, timerLength);

export default imageSliderHandler;
