function volume_sphere() {
    //Write your code here
	const radius = Number(document.getElementById("radius").value);
	const volumn = Number(document.getElementById("volumn");

	if(isNaN(radius) || radius < 0){
		volumn.value = "NaN";
	}
	else{
			const result = (4 / 3) * Math.PI * radius ** 3;
		volumn.value = result.toFixed(4);
	}
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
