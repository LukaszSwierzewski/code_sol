const sliderItems = document.querySelector(".slider-items").children;
const lightBoxImage = document.querySelector(".lightbox-img");
const counter = document.querySelector(".lightbox-counter");
const lightBoxClose = document.querySelector(".lightbox-close");
const lightBoxText = document.querySelector(".lightbox-text");
const lightBoxContainer = document.querySelector(".lightbox");
const nextWrapper = document.querySelector(".next");
const prevWrapper = document.querySelector(".prev");
const prevChild = document.querySelector(".prev span");
const nextChild = document.querySelector(".next span");

console.log(prevChild);
let index;
let imgSrc;

for (let i = 0; i < sliderItems.length; i++) {
  sliderItems[i].querySelector(".fa").addEventListener("click", () => {
    // console.log(sliderItems[i].querySelector("h2"));
    index = i;
    changeImage();
    lightBox();
  });
}

const lightBox = () => {
  lightBoxContainer.classList.toggle("open");
};

const changeImage = () => {
  imgSrc = sliderItems[index].querySelector("img").getAttribute("src");
  lightBoxImage.src = imgSrc;
  counter.innerHTML = `${index + 1} z ${sliderItems.length}`;

  lightBoxText.innerHTML = sliderItems[index].querySelector("h2").innerHTML;
};
const nextImage = () => {
  if (index == sliderItems.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImage();
};

const prevImage = () => {
  if (index == 0) {
    index = sliderItems.length - 1;
  } else {
    index--;
  }
  changeImage();
};
lightBoxContainer.addEventListener("click", () => {
  if (
    event.target !== lightBoxImage &&
    event.target !== nextWrapper &&
    event.target !== prevWrapper &&
    event.target !== prevChild &&
    event.target !== nextChild
  ) {
    lightBox();
    console.log("closed");
  }
});

nextWrapper.addEventListener("click", nextImage);
prevWrapper.addEventListener("click", prevImage);

document.onkeydown = (e) => {
  if (lightBoxContainer.classList.contains("open")) {
    switch (e.keyCode) {
      case 37:
        prevImage();
        break;

      case 39:
        nextImage();
        break;
    }
  }
};
const zoomOnClick = () => {
  lightBoxImage.classList.toggle("scale-up");
  lightBoxImage.classList.toggle("scale-down");
};

lightBoxImage.addEventListener("click", zoomOnClick);
