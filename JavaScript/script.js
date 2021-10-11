let hamburger = document.getElementById('hamburger')
let navMenu = document.getElementById('nav-menu')
let aside = document.getElementById('nav-item')
let switchMode = document.getElementById('swithMode')

switchMode.onclick = function() {
    let theme = document.getElementById('theme')

    if (theme.getAttribute('href') == './style/style.css') {
        theme.href = './style/dark-mode.css'
    } else {
        theme.href = './style/style.css'
    }
}

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}
let navLink = document.getElementById('nav-link')

navLink.forEach((n) => n.addEventListener('click', closeMenu))

function closeMenu() {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}

function myFunction(x) {
    x.classList.toggle('change')
}

document.getElementById('trigger').onclick = function() {
    open()
}

function open() {
    document.getElementById('menu').classList.toggle('show')
}

function myFunction(x) {
    x.classList.toggle('change')
}

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function sjow() {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
}

function close() {
    mainMenu.style.top = '-100'
}

let hamburger = document.getElementById('hamburger')
let navMenu = document.getElementById('nav-menu')
let aside = document.getElementById('nav-item')
let switchMode = document.getElementById('swithMode')

switchMode.onclick = function() {
    let theme = document.getElementById('theme')

    if (theme.getAttribute('href') == './style/style.css') {
        theme.href = './style/dark-mode.css'
    } else {
        theme.href = './style/style.css'
    }
}

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}
let navLink = document.getElementById('nav-link')

navLink.forEach((n) => n.addEventListener('click', closeMenu))

function closeMenu() {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}

const bur = document.querySelector('.bur')