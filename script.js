const form = document.querySelector("form");

const radius = document.getElementById("radius");
const volume = document.getElementById("volume");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const r = Number(radius.value);

    const result = (4 / 3) * Math.PI * r * r * r;

    volume.value = result.toFixed(4);
});