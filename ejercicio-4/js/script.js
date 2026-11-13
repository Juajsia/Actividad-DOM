var color = document.getElementById('color')

color.addEventListener('change', (e) => {
    newColor = color.value

    const cardBody = document.querySelector('.card-body')
    cardBody.setAttribute('style', `background-color: ${newColor};`)
})