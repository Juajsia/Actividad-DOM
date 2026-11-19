const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const producto = document.getElementById('producto')
    const lista = document.querySelector('ul')
    const error = document.getElementById('error')
    if (producto.value === '') {
        error.textContent = 'Ingresar un producto a añadir'
        return
    }

    lista.innerHTML += `<li>${producto.value}</li>`
    producto.value = ''

})