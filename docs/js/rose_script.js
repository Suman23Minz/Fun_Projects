document.addEventListener("DOMContentLoaded", function () {
    var roseContainer = document.querySelector(".rose-container");

    function createRose() {
        var rose = document.createElement("div");
        rose.className = "rose";

        // Use text instead of emoji if your editor still complains
        rose.textContent = "🌹";

        rose.style.left = Math.random() * 100 + "%";
        rose.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");

        var size = Math.random() * 16 + 24;
        rose.style.fontSize = size + "px";

        rose.style.animationDuration = (Math.random() * 2 + 4) + "s";

        roseContainer.appendChild(rose);

        setTimeout(function () {
            rose.remove();
        }, 7000);
    }

    setInterval(createRose, 500);
});
