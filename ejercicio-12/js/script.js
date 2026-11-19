const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const number = Number(document.getElementById('number').value)
    const tbody = document.querySelector('tbody')
    const h2 = document.querySelector('h2')

    if (number.length === 0) {
        return
    }
    let element = ''
    for (let i = 1; i <= 10; i++) {
        element += `
        <tr>
        <td>${number}</td>
        <td>x</td>
        <td>${i}</td>
        <td>=</td>
        <td>${number * i}</td>
        </tr>
        `
    }

    tbody.innerHTML = element
    h2.textContent = `Tabla del ${number}`


})