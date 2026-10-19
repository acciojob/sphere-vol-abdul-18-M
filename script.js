
function volume_sphere() {
    let radius = parseFloat(document.getElementById("radius").value);

    let volume;

    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * radius * radius * radius;
        volume = volume.toFixed(4);
    }

    document.getElementById("volume").value = volume;
}

