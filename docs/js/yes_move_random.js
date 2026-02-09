const noBtn = document.getElementById("yes_move_random");
const card = document.querySelector(".container-card");

let moveCount = 0;
const maxMoves = 2;

function moveNoButton() {
    if (moveCount >= maxMoves) {
        noBtn.style.position = "static";
        return false; // allow click
    }

    const styles = getComputedStyle(card);

    const paddingLeft = parseFloat(styles.paddingLeft);
    const paddingRight = parseFloat(styles.paddingRight);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);

    const usableWidth =
        card.clientWidth - paddingLeft - paddingRight;
    const usableHeight =
        card.clientHeight - paddingTop - paddingBottom;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = Math.max(0, usableWidth - btnWidth);
    const maxY = Math.max(0, usableHeight - btnHeight);

    const randomX = paddingLeft + Math.random() * maxX;
    const randomY = paddingTop + Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    moveCount++;
    return true; // moved
}

/* Desktop hover */
noBtn.addEventListener("mouseenter", (e) => {
    moveNoButton();
});

/* Mobile touch */
noBtn.addEventListener("touchstart", (e) => {
    if (moveNoButton()) {
        e.preventDefault(); // stop navigation
    }
}, { passive: false });
