const title = document.querySelector('#title')
const des = document.querySelector('#details')
const planetImg = document.querySelector('#planetImg')
const dis = document.querySelector('#dis')
const days = document.querySelector('#days')

const moon = document.querySelector('#moon') // ./images/destination/image-moon.png
const mars = document.querySelector('#mars') // ./images/destination/image-mars.png
const europa = document.querySelector('#europa') // ./images/destination/image-europa.png
const titan = document.querySelector('#titan') // ./images/destination/image-titan.png

moon.addEventListener('click', function () {
    title.innerText = 'MOOn';
    des.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
    planetImg.src = './images/destination/image-moon.png'
    dis.innerText = '384,400 km'
    days.innerText = '3 days'
})


mars.addEventListener('click', function () {
    title.innerText = 'MARS';
    des.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
    planetImg.src = './images/destination/image-mars.png'
    dis.innerText = '225 mil. km'
    days.innerText = '9 months'
})


europa.addEventListener('click', function () {
    title.innerText = 'EUROPA';
    des.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
    planetImg.src = './images/destination/image-europa.png'
    dis.innerText = '628 mil. km'
    days.innerText = '3 years'
})


titan.addEventListener('click', function () {
    title.innerText = 'TITAN';
    des.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
    planetImg.src = './images/destination/image-titan.png'
    dis.innerText = '1.6 bil. km'
    days.innerText = '7 years'
})

const buttons = document.querySelectorAll('button')

for (let button of buttons) {
    button.addEventListener('click', function () {
        removeClass();
        button.classList.add('oN')
        console.log(button)
    })
}

function removeClass() {
    for (let button of buttons){
        button.classList.remove('oN')
    }
}