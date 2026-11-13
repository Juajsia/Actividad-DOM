const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre')
    const mensaje = document.getElementById('mensaje')
    if (nombre.value != '') {
        mensaje.innerText = `¡Hola, ${nombre.value}! Bienvenida.`
        nombre.value = ''
    }

})