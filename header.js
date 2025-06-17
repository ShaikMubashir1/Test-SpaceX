const menuBtn = document.querySelector('#menuIcon')
const menu = document.querySelector('#moNav')
const body = document.body;

menuBtn.addEventListener('click', function () {
    if (menu.className === 'moNav') {
        menuBtn.src = './images/shared/icon-hamburger.svg'
        body.style.overflow = 'scroll'
    } else {
        menuBtn.src = './images/shared/icon-close.svg'
        body.style.overflow = 'hidden'
    }
    menu.classList.toggle('moNav')
})