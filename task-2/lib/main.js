"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var uploadFiles = document.querySelector('.upload-files');
var uploadArea = document.querySelector('.upload-area');
var imageDiv = document.createElement('div');
var videoDiv = document.createElement('div');
var audioDiv = document.createElement('div');
var videCounter = 0;
var audioCounter = 0;
var imageTotal = 0;
var videoTotal = 0;
var audioTotal = 0;
var totals = document.querySelector('.totals');
var tr = document.createElement('tr');
var imagestotalTD = document.createElement('td');
var audiostotalTD = document.createElement('td');
var videostotalTD = document.createElement('td');
uploadFiles.addEventListener("click", function () {
  this.nextElementSibling.click();
});

document.querySelector('#upload-input').onchange = function (e) {
  tr.innerHTML = "";
  Uploader(_toConsumableArray(e.target.files));
};

uploadFiles.addEventListener('dragover', function (e) {
  e.preventDefault();
  this.classList.add("overing");
});
uploadFiles.addEventListener('dragleave', function (e) {
  e.preventDefault();
});
uploadFiles.addEventListener('drop', function (e) {
  e.preventDefault();
  Uploader(_toConsumableArray(e.dataTransfer.files));
  this.classList.remove("overing");
});

function Uploader(files) {
  files.forEach(function (file) {
    var reader = new FileReader();

    reader.onloadend = function (event) {
      if (file.type.match(file.type.match("image/*"))) {
        imageDiv.classList.add("images");
        var image = document.createElement('img');
        image.src = event.target.result;
        imageDiv.appendChild(image);
        imageTotal = imageTotal + event.total;
      } else if (file.type.match("video/*")) {
        videCounter++;
        videoDiv.classList.add("videos");
        var video = document.createElement('p');
        var videoIcon = document.createElement('i');
        videoIcon.className = "fas fa-video";
        video.append(videCounter);
        video.appendChild(videoIcon);
        videoDiv.appendChild(video);
        videoTotal = videoTotal + event.total;
      } else if (file.type.match("audio/*")) {
        audioCounter++;
        audioDiv.classList.add("audios");
        var audio = document.createElement('p');
        var audioIcon = document.createElement('i');
        audioIcon.className = "fas fa-music";
        audio.append(audioCounter);
        audio.appendChild(audioIcon);
        audioDiv.appendChild(audio);
        audioTotal = audioTotal + event.total;
      }

      uploadArea.appendChild(imageDiv);
      uploadArea.appendChild(videoDiv);
      uploadArea.appendChild(audioDiv);
      imagestotalTD.innerText = (imageTotal / 1024 / 1024).toFixed(2);
      audiostotalTD.innerText = (audioTotal / 1024 / 1024).toFixed(2);
      videostotalTD.innerText = (videoTotal / 1024 / 1024).toFixed(2);
      tr.appendChild(imagestotalTD);
      tr.appendChild(videostotalTD);
      tr.appendChild(audiostotalTD);
      totals.lastElementChild.appendChild(tr);
      totals.classList.remove("opacity");
    };

    reader.readAsDataURL(file);
  });
}