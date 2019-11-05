const cardID = document.getElementById('cardID')
const colorInput = document.getElementById('colorInput')

function setCard() {
    const card = document.getElementById(cardID.value)
    card.style.color = colorInput.value
}

