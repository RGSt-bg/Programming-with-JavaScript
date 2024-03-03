function agencyIncome(input)
{
	let airlineName = input[0];
	let adultPlaces = Number(input[1]);
	let childPlaces = Number(input[2]);
	let adultPrice = Number(input[3]);
	let serviceFee = Number(input[4]);
	let childPrice = adultPrice * 0.3;
	let profit = 0;
	
	profit = (adultPlaces * (adultPrice + serviceFee) + childPlaces * (childPrice + serviceFee)) * 0.2;
	console.log(`The profit of your agency from ${airlineName} tickets is ${profit.toFixed(2)} lv.`);
}

agencyIncome(["Ryanair","60","23","158.96","39.12"]);
