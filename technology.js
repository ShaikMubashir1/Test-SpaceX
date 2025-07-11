const laVe = document.querySelector('#laVe') // ./images/technology/image-launch-vehicle-portrait.jpg
const spPo = document.querySelector('#spPo') // ./images/technology/image-spaceport-portrait.jpg
const spCp = document.querySelector('#spCp') // ./images/technology/image-space-capsule-portrait.jpg
const tecImg = document.querySelector('#tecImg')
const tecImgMo = document.querySelector('#tecImgMo')

const title = document.querySelector('#name')
const details = document.querySelector('#details')

laVe.addEventListener('click', function () {
    title.innerText = 'Launch vehicle'
    details.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    tecImg.src = './images/technology/image-launch-vehicle-portrait.jpg'
    tecImgMo.src = './images/technology/image-launch-vehicle-landscape.jpg'
})

spPo.addEventListener('click', function () {
    title.innerText = 'Spaceport'
    details.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    tecImg.src = './images/technology/image-spaceport-portrait.jpg'
    tecImgMo.src = './images/technology/image-spaceport-landscape.jpg'
})

spCp.addEventListener('click', function () {
    title.innerText = 'Space capsule'
    details.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    tecImg.src = './images/technology/image-space-capsule-portrait.jpg'
    tecImgMo.src = './images/technology/image-space-capsule-landscape.jpg'
})

const buttons = document.querySelectorAll('button')

for (let button of buttons) {
    button.addEventListener('click', function () {
        removeClass();
        button.classList.add('oN')
    })
}

function removeClass() {
    for (let button of buttons){
        button.classList.remove('oN')
    }
}