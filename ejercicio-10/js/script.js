const redButton = document.querySelector('.btn-outline-danger')
const yellowButton = document.querySelector('.btn-outline-warning')
const greenButton = document.querySelector('.btn-outline-success')

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const mensaje = document.querySelector('p')

redButton.addEventListener('click', () => {
    red.style.backgroundColor = 'red'
    yellow.style.backgroundColor = '#5d5d03'
    green.style.backgroundColor = '#083b08'
    mensaje.textContent = 'Detente'
    mensaje.style.color = 'red'
})

yellowButton.addEventListener('click', () => {
    red.style.backgroundColor = '#450606'
    yellow.style.backgroundColor = 'yellow'
    green.style.backgroundColor = '#083b08'
    mensaje.textContent = 'Precaución'
    mensaje.style.color = 'orange'
})

greenButton.addEventListener('click', () => {
    red.style.backgroundColor = '#450606'
    yellow.style.backgroundColor = '#5d5d03'
    green.style.backgroundColor = 'green'
    mensaje.textContent = 'Puedes avanzar'
    mensaje.style.color = 'green'
})
