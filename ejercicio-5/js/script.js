const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = document.getElementById('task')
    const lista = document.getElementById('lista')

    lista.innerHTML += `<li>${task.value}</li>`
    task.value = ''

})