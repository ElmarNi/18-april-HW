"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var menuList = document.querySelectorAll('.menu li');
var images = document.querySelectorAll('.images li');
var asc = document.querySelector('.asc');
var desc = document.querySelector('.desc');

_toConsumableArray(menuList).forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    var id = menuItem.getAttribute('data-id');

    _toConsumableArray(images).forEach(function (image) {
      if (id == 0) {
        image.classList.remove('d-none');
        return false;
      }

      image.getAttribute('data-id') == id ? image.classList.remove('d-none') : image.classList.add('d-none');
    });
  });
});

desc.addEventListener('click', function () {
  for (var i = 1; i <= images.length; i++) {
    document.querySelector('.images').appendChild(images[images.length - i]);
  }
});
asc.addEventListener('click', function () {
  for (var i = 0; i < images.length; i++) {
    document.querySelector('.images').appendChild(images[i]);
  }
});