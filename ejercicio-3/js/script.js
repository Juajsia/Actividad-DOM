const input = document.getElementById('input')
const mensaje = document.getElementById('mensaje')

input.addEventListener('input', (e) => {
    mensaje.innerText = input.value
})