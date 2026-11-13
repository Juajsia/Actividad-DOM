var cont = 0

const add = document.getElementById('add')
const reset = document.getElementById('reset')
const numero = document.getElementById('numero')

add.addEventListener('click', (e) => {
    cont += 1
    numero.innerText = cont

    if (cont >= 10) {
        numero.setAttribute('style', 'color: green;')
    }
})

reset.addEventListener('click', (e) => {
    cont = 0
    numero.innerText = cont
    numero.setAttribute('style', '')
})