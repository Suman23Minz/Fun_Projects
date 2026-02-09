const heartLayer = document.querySelector('.broken_heart_container');

function spawnBrokenHeart() {
    var heart = document.createElement('div');
    heart.classList.add('broken-heart');

    heart.innerHTML = '💔';

    // Random horizontal position inside card
    heart.style.left = Math.random() * 90 + '%';

    // Random size
    heart.style.fontSize = (22 + Math.random() * 18) + 'px';

    heartLayer.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(spawnBrokenHeart, 700);