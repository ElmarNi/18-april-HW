const uploadFiles = document.querySelector('.upload-files');
const uploadArea = document.querySelector('.upload-area');
const imageDiv = document.createElement('div');
const videoDiv = document.createElement('div');
const audioDiv = document.createElement('div');
let videCounter = 0;
let audioCounter = 0;
let imageTotal = 0;
let videoTotal = 0;
let audioTotal = 0;
const totals = document.querySelector('.totals')
const tr = document.createElement('tr');
const imagestotalTD = document.createElement('td')
const audiostotalTD = document.createElement('td')
const videostotalTD = document.createElement('td')

uploadFiles.addEventListener("click", function () {
    this.nextElementSibling.click()
})
document.querySelector('#upload-input').onchange = function (e) {
    tr.innerHTML = "";
    Uploader([...e.target.files])
}
uploadFiles.addEventListener('dragover',function(e){
    e.preventDefault();
    this.classList.add("overing")
})
uploadFiles.addEventListener('dragleave',function(e){
    e.preventDefault();
})
uploadFiles.addEventListener('drop',function(e){
    e.preventDefault();
    Uploader([...e.dataTransfer.files]);
    this.classList.remove("overing")

})
function Uploader(files) {
    files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = function (event) {
            if (file.type.match(file.type.match("image/*"))) {
                imageDiv.classList.add("images");
                const image = document.createElement('img');
                image.src = event.target.result;
                imageDiv.appendChild(image);
                imageTotal = imageTotal + event.total;
            }
            else if (file.type.match("video/*")) {
                videCounter++;
                videoDiv.classList.add("videos")
                const video = document.createElement('p');
                const videoIcon = document.createElement('i');
                videoIcon.className = ("fas fa-video");
                video.append(videCounter);
                video.appendChild(videoIcon);
                videoDiv.appendChild(video);
                videoTotal = videoTotal + event.total;
            }
            else if (file.type.match("audio/*")) {
                audioCounter++;
                audioDiv.classList.add("audios")
                const audio = document.createElement('p');
                const audioIcon = document.createElement('i');
                audioIcon.className = ("fas fa-music");
                audio.append(audioCounter);
                audio.appendChild(audioIcon);
                audioDiv.appendChild(audio);
                audioTotal = audioTotal + event.total;
            }
            uploadArea.appendChild(imageDiv);
            uploadArea.appendChild(videoDiv);
            uploadArea.appendChild(audioDiv);
            imagestotalTD.innerText = ((imageTotal / 1024) / 1024).toFixed(2)
            audiostotalTD.innerText = ((audioTotal / 1024) / 1024).toFixed(2)
            videostotalTD.innerText = ((videoTotal / 1024) / 1024).toFixed(2)
            tr.appendChild(imagestotalTD);
            tr.appendChild(videostotalTD);
            tr.appendChild(audiostotalTD);
            totals.lastElementChild.appendChild(tr);
            totals.classList.remove("opacity")
        }
        reader.readAsDataURL(file);

    })
}