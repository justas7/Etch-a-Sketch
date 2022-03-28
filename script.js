"use strict";

const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#resetBtn");

/* Sets grid items number and creates divs */
const setGridItems = function (grids) {
  gridContainer.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;

  for (let i = 0; i < grids * grids; i++) {
    gridContainer.appendChild(document.createElement("div"));
  }
};

setGridItems(12);
let gridItems = gridContainer.querySelectorAll("div");

/* creates random number between min and max numbers included. use from 0 to 255 */
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* painting functions */
const paintRandom = function (e) {
  e.target.style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

const reset = function () {
  gridItems.forEach((item) => {
    item.remove();
  });

  let gridsNumb = Number(window.prompt("Pad size(1-100", 12));

  if (!Number.isInteger(gridsNumb) || gridsNumb < 1 || gridsNumb > 100) {
    gridsNumb = 12;
  }

  setGridItems(gridsNumb);
  gridItems = gridContainer.querySelectorAll("div");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", paintRandom);
  });
};

gridItems.forEach((item) => {
  item.addEventListener("mouseover", paintRandom);
});

resetBtn.addEventListener("click", reset);
