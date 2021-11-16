const button = document.querySelector('#button-top');

window.addEventListener('scroll', () => {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (scroll > 300) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
});

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});