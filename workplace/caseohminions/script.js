function equityWorth(totalCompanyValue, companyNumberShares, employeeNumberShares, salary) {
	return Number(salary) + ((employeeNumberShares / companyNumberShares) * totalCompanyValue)
}

function processInputs() {
	const input1 = document.getElementById('input1').value;
	const input2 = document.getElementById('input2').value;
	const input3 = document.getElementById('input3').value;
	const input4 = document.getElementById('input4').value;
	if (input1 == "" || input2 == "" || input3 == "" || input4 == "") {
		return "One or more input fields are missing."
	}
	const toReturn = equityWorth(input1, input2, input3, input4);
	console.log(toReturn);
	return "$" + Math.floor(toReturn * 100) / 100;
}

function changeH2Text() {
		// Get the h2 element by its id
		const h2Element = document.getElementById('myHeading');

		// Change the text content of the h2 element
		h2Element.textContent = processInputs();
}
