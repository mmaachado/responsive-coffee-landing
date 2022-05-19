/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*===== MENU HIDDEN =====*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== REMOVE MENU MOBILE =====*/

/*===== SCROLL REVEAL ANIMATION =====*/