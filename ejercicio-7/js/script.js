const input = document.querySelector('input')
input.addEventListener('input', () => {
    const label = document.getElementById('label')

    if (input.value.length === 0) {
        label.textContent = ''
    } else if (input.value.length < 6) {
        label.textContent = 'Contraseña muy corta'
        label.style.color = 'red'
    } else if (input.value.length >= 6 && input.value.length < 9) {
        label.textContent = 'Contraseña aceptable'
        label.style.color = 'orange'
    } else {
        label.textContent = 'Contraseña fuerte'
        label.style.color = 'green'
    }
})