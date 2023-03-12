countEl = document.getElementById("count");

function countBill() {
	sumUpEl = document.getElementById("sum-up");
	priceEl = document.getElementById("price");
	peopleEl = document.getElementById("people");
	tipEl = document.getElementById("tip");
	costEl = document.getElementById("cost");
	errorEl = document.getElementById("error");

	const error = (error) => {
		sumUpEl = sumUpEl.style.display = "none";
		errorEl.style.display = "block";
	};

	if (peopleEl.value < 1 || peopleEl.value == "" || priceEl.value == "") {
		error();
	}

	costEl.value = +(
		(+priceEl.value + tipEl.value * +priceEl.value) /
		+peopleEl.value
	).toFixed(2);

	costEl.textContent = costEl.value;
	console.log(costEl.textContent, costEl.value);

	if (costEl.textContent == costEl.value) {
		sumUpEl = sumUpEl.style.display = "block";
		errorEl.style.display = "none";
	} else {
		error();
	}
}

countEl.addEventListener("click", countBill);
