let mobileMenu = document.getElementsByClassName('mobile-menu');
let menuBar = document.getElementById('menu-bar');
let closeIcon = document.getElementsByClassName('close');

menuBar.addEventListener('click', () => {
    mobileMenu[0].classList.remove('hidden');
})

closeIcon[0].addEventListener('click', () => {
    mobileMenu[0].classList.add('hidden');
})