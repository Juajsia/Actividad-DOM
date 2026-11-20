const bigPicture = document.getElementById('bigPicture')
const title = document.querySelector('h2')
const thumbnails = document.querySelectorAll('.thumbnail')

let activa = thumbnails[0]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        bigPicture.src = thumbnail.src
        title.textContent = thumbnail.alt
        activa.classList.remove('active')
        thumbnail.classList.add('active')
        activa = thumbnail
    })
});