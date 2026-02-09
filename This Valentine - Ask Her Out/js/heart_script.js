const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random horizontal position (avoid edges)
    heart.style.left = Math.random() * 90 + 5 + "%";

    // One size variable for whole heart
    const size = Math.random() * 12 + 14;
    heart.style.setProperty("--size", size + "px");

    // Random rise duration
    const duration = Math.random() * 2 + 4;
    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    // Cleanup
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Smooth creation rate
setInterval(createHeart, 250);
