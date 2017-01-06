"use strict";
//функция для получения случайного целого числа из отрезка. 
function getRandomInt(min, max) {
  return Math.round(min + (max - min) * Math.random());
}

//функция получения рандомной интенсивности цветового канала
function getRandomCanalIntensity() {
  var a = getRandomInt(0, 255).toString(16);
  if (a.length != 2) {
    a = '0' + a;
  }
  return a;
}

//Функция получения рандомного цвета:
function getRandomColor() {
  var r = getRandomCanalIntensity(),
    g = getRandomCanalIntensity(),
    b = getRandomCanalIntensity();
  return '#' + r + g + b;
}

function nestedDivs(parentDiv, k, n) {
  for(var i = 0; i < n; i++) {
    var width = parseInt(parentDiv.style.width),
      height = parseInt(parentDiv.style.height),
      childDiv = document.createElement('DIV');
 
    childDiv.style.width = width * k + 'px';
    childDiv.style.height = height * k + 'px';
    childDiv.style.marginTop = height * (1 - k) / 2 + 'px';
    childDiv.style.backgroundColor = getRandomColor();
    parentDiv.appendChild(childDiv);
    parentDiv = childDiv;
  }
}

window.onload = function () {
  var parentDiv = document.getElementsByTagName('DIV')[0];
  parentDiv.style.backgroundColor = getRandomColor();
  appendDiv(parentDiv, 0.9, 20);
} 