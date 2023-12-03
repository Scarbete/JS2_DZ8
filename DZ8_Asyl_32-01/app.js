const platinumButton = document.getElementById('platinumButton')
const silverButton = document.getElementById('silverButton')
const goldButton = document.getElementById('goldButton')
const divider = document.querySelector('.divider')
const sumBox = document.getElementById('sumBox')
const number = document.getElementById('number')
const points = document.getElementById('points')
const money = document.getElementById('money')

let cardType = 'silver'
let result = 0

const animationCardDivider = () => {
    if (cardType === 'gold') {
        divider.style.left = '238px'
    }
    else if (cardType === 'platinum') {
        divider.style.left = '476px'
    }
    else {
        divider.style.left = '0px'
    }
}

silverButton.onclick = () => {
    cardType = 'silver'
    animationCardDivider()
}
goldButton.onclick = () => {
    cardType = 'gold'
    animationCardDivider()
}
platinumButton.onclick = () => {
    cardType = 'platinum'
    animationCardDivider()
}

const sumPoints = ( num ) => {
    if (cardType === 'silver') {
        result = num * 0.02
    }
    else if (cardType === 'gold') {
        result = num * 0.025
    }
    else if (cardType === 'platinum') {
        result = num * 0.03
    }

    points.innerText = result
    money.innerText = result
}

sumBox.onsubmit = event => {
    event.preventDefault()
    const numberValue = Number(number.value)
    if (numberValue < 100) return alert('значение поля не может быть меньше 100!')
    sumPoints(numberValue)
}