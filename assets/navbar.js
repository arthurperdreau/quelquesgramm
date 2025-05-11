const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => {
    const isMenuVisible = mobileMenu.classList.contains('block');

    if (isMenuVisible) {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
    } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
    }
});

const boutons = document.querySelectorAll('.like');
boutons.forEach((bouton) => {
    bouton.addEventListener('click', like);
});

function like(event) {
    event.preventDefault();

    const bouton = event.currentTarget;

    fetch(bouton.href)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            bouton.querySelector('.nbrLikes').innerHTML = data.count;

            const thumb = bouton.querySelector('.thumb');
            if (data.liked) {
                thumb.classList.remove('bi-hand-thumbs-up');
                thumb.classList.add('bi-hand-thumbs-up-fill');
            } else {
                thumb.classList.remove('bi-hand-thumbs-up-fill');
                thumb.classList.add('bi-hand-thumbs-up');
            }
        });
}
