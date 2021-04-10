const hamburger = document.querySelector('.hamburger') 
const close = document.querySelector('.c-hamburger')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

nav.style.maxHeight = '0px'
toggleMenu()
hamburger.addEventListener('click', (e) => {
    hamburger.style.display = 'none'
    close.style.display = 'block'
    nav.style.display = 'flex'
    nav.style.visibility = 'visible'
    nav.style.width = '90%'
    body.classList.add('shadow')
})

close.addEventListener('click', (e) => {
    hamburger.style.display = 'block'
    close.style.display = 'none'
    nav.style.display = 'none'
    body.classList.remove('shadow')
})

function toggleMenu() {
    if(nav.style.maxHeight == '0px') {
        nav.style.maxHeight = '50%'

    } else {
        nav.style.maxHeight = '0px'
    }
}

