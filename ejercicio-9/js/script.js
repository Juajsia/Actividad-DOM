const img = document.querySelector('.card-img-top')
const title = document.querySelector('.card-title')
const profesion = document.querySelector('.card-text')

const nameInput = document.getElementById('name')
const profesionInput = document.getElementById('profesion')
const imgInput = document.getElementById('img')

document.addEventListener('DOMContentLoaded', () => {
    nameInput.value = title.textContent
    profesionInput.value = profesion.textContent
    imgInput.value = img.src
})

nameInput.addEventListener('input', () => {
    title.textContent = nameInput.value
})

profesionInput.addEventListener('input', () => {
    profesion.textContent = profesionInput.value
})

imgInput.addEventListener('input', () => {
    img.src = imgInput.value
})