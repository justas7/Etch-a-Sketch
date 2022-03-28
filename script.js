"use strict";

const gridContainer = document.querySelector("#grid-container");

const setGridItems = function (grids) {
  gridContainer.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;

  for (let i = 0; i < grids * grids; i++) {
    gridContainer.appendChild(document.createElement("div"));
  }
};

setGridItems(16);
const gridItems = gridContainer.querySelectorAll("div");

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const paint = function (e) {
  e.target.style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

gridItems.forEach((item) => {
  item.addEventListener("mouseover", paint);
});
