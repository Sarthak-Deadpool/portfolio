const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('#header .container');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = 'rgb(70, 152, 190)';
    } else {
        header.style.backgroundColor = 'rgba(31, 30, 30, 0.3)';
    }
});