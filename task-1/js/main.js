const menuList = document.querySelectorAll('.menu li');
const images = document.querySelectorAll('.images li');
const asc = document.querySelector('.asc');
const desc = document.querySelector('.desc');
[...menuList].forEach(menuItem => {
    menuItem.addEventListener('click', function () {
        const id = menuItem.getAttribute('data-id');
        [...images].forEach(image => {
            if (id == 0) {
                image.classList.remove('d-none');
                return false
            }
            image.getAttribute('data-id') == id ? image.classList.remove('d-none') :
                image.classList.add('d-none');
        })
    })
})
desc.addEventListener('click', function () {
    for (let i = 1; i <= images.length; i++) document.querySelector('.images').appendChild(images[images.length - i])
})
asc.addEventListener('click', function () {
    for (let i = 0; i < images.length; i++) document.querySelector('.images').appendChild(images[i])
})