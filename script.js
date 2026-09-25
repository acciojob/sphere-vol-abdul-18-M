const form = document.getElementById("MyForm");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const r = parseFloat(radius.value);

    if (r < 0) {
        volume.value = "NaN";
        return;
    }

    const result = (4 / 3) * Math.PI * r * r * r;

    volume.value = result.toFixed(4);
});