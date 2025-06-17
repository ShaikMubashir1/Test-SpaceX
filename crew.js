const douHur = document.querySelector('#douHur') // ./images/crew/image-douglas-hurley.png
const marShu = document.querySelector('#marShu') // ./images/crew/image-mark-shuttleworth.png
const vicGlo = document.querySelector('#vicGlo') // ./images/crew/image-victor-glover.png
const anoAns = document.querySelector('#anoAns') // ./images/crew/image-anousheh-ansari.png

const crewImg = document.querySelector('#crewImg')
const position = document.querySelector('#position')
const crewName = document.querySelector('#name')
const details = document.querySelector('#details')

douHur.addEventListener('click', function () {
    crewImg.src = './images/crew/image-douglas-hurley.png'
    position.innerText = 'Mission Specialist'
    crewName.innerText = 'Douglas Hurley'
    details.innerText = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
})

marShu.addEventListener('click', function () {
    crewImg.src = './images/crew/image-mark-shuttleworth.png'
    position.innerText = 'Mission Specialist'
    crewName.innerText = 'Mark Shuttleworth'
    details.innerText = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
})

vicGlo.addEventListener('click', function () {
    crewImg.src = './images/crew/image-victor-glover.png'
    position.innerText = 'Pilot'
    crewName.innerText = 'Victor Glover'
    details.innerText = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
})

anoAns.addEventListener('click', function () {
    crewImg.src = './images/crew/image-anousheh-ansari.png'
    position.innerText = 'Flight Engineer'
    crewName.innerText = 'Anousheh Ansari'
    details.innerText = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
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