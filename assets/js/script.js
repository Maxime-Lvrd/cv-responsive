// afficher navbar selon taille de l'écran
window.onload=function() {
    var btn = document.querySelector('.toggle-menu');
    var nav = document.querySelector('nav ul');
    btn.onclick = function() {
        if (nav.style.display == 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
};

window.addEventListener('resize', function() {
    var nav = document.querySelector('nav ul');
    width = window.innerWidth;
    if (width >= 600) {
        nav.style.display = 'block';
    }
    else {
        nav.style.display = 'none';
    }
});

// animation hover lien
let arrow = document.querySelector('.a');

arrow.addEventListener('mouseover', () => {
    arrow.classList.toggle('a-animation');
});
arrow.addEventListener('mouseout', () => {
    arrow.classList.toggle('a-animation');
});

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
})

