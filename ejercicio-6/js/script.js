const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const weigth = document.getElementById('weight').value
    const height = document.getElementById('height').value

    console.log(weigth, height)
    const imcResult = document.getElementById('imc')

    const imc = weigth / (height * height);

    if (imc < 18.50) {
        imcResult.style.backgroundColor = '#f57627'
    } else if (imc >= 18.50 && imc < 25) {
        imcResult.style.backgroundColor = '#27EBF5'
    } else if (imc >= 25 && imc < 30) {
        imcResult.style.backgroundColor = '#F5EB27'
    } else if (imc >= 30 && imc < 35) {
        imcResult.style.backgroundColor = '#f57627'
    } else if (imc >= 35 && imc < 40) {
        imcResult.style.backgroundColor = '#ee6109'
    } else {
        imcResult.style.backgroundColor = '#f52727'
    }
    imcResult.style.color = 'white'
    imcResult.textContent = Math.round(imc * 100) / 100
})