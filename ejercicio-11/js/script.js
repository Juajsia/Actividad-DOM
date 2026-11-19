const form = document.querySelector('form')

const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const age = document.getElementById('age').value
    const alert = document.querySelector('.alert')

    if (validateName(name) && validateEmail(email) && validateAge(age)) {
        alert.classList.add('alert-success')
        alert.classList.remove('alert-danger')
        alert.textContent = 'Registro Exitoso!'
    } else {
        alert.classList.add('alert-danger')
        alert.classList.remove('alert-success')
        alert.textContent = 'No se puedo realizar el Registro'
    }
})

function validateName(name) {
    if (isEmpty(name)) {
        error1.textContent = 'nombre no puede estar vacio'
        return false
    }
    error1.textContent = ''
    return true

}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (isEmpty(email)) {
        error2.textContent = 'Correo no puede estar vacio'
        return false
    }

    if (!emailRegex.test(email.trim())) {
        error2.textContent = 'formato de correo inválido: example@example.com'
        return false
    }
    error2.textContent = ''
    return true
}

function validateAge(age) {
    if (isEmpty(age)) {
        error3.textContent = 'edad no puede estar vacio'
        return false
    }

    if (age < 18) {
        error3.textContent = 'Edad debe ser mayor a 18'
        return false
    }
    error3.textContent = ''
    return true
}

function isEmpty(s) {
    return s.length === 0 ? true : false
}


