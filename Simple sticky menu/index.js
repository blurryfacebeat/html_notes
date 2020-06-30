window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.pageYOffset >= 150) {
        header.classList.add('header_fixed');
    } else if (window.pageYOffset === 0) {
        header.classList.remove('header_fixed');
    }
});
