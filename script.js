let sliders = document.querySelectorAll(".slider-box");
let currSlide = 0;
sliders.forEach((el, index) => {
  el.style.transform = `translateX(${index * 110}%)`;
});

let box = document.querySelector(".box");
let moveRight = () => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  move(currSlide);
};
let moveLeft = () => {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  move(currSlide);
};
let maxSlide = sliders.length;
let pointerRight = document
  .querySelector(".pointer-left")
  .addEventListener("click", moveLeft);

let pointerLeft = document
  .querySelector(".pointer-right")
  .addEventListener("click", moveRight);

let move = (slide) => {
  sliders.forEach((el, index) => {
    el.style.transform = `translateX(${(index - slide) * 110}%)`;

    el.classList.remove("hide-box");
  });
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  }
  //same e.key === "ArrowRight" && moveLeft()
});
//projects
let first = document.querySelector(".first");
let second = document.querySelector(".second");

let buttons = document
  .querySelector(".projects__buttons")
  .addEventListener("click", function (el) {
    if (el.target.classList.contains("button1")) {
      first.classList.remove("hidecontent");
      adding(second);
    }
    if (el.target.classList.contains("button2")) {
      adding(first);
      second.classList.remove("hidecontent");
    }
  });

function adding(first) {
  first.classList.add("hidecontent");
}
