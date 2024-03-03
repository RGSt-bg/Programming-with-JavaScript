function cone(radius, height)
{
	let volume = 0;
	let area = 0;

	volume = (Math.PI * Math.pow(radius, 2) * height / 3).toFixed(4);
	console.log(`volume = ${volume}`);

    area = (Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)) * Math.PI * radius + Math.PI * Math.pow(radius, 2)).toFixed(4);
	console.log(`area = ${area}`);
	
}

cone(3.3, 7.8);