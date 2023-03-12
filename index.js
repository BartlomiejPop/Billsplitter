const count = document.addEventListener("click", (e) => {
	sumUpEl = document.getElementById("sum-up");

	const priceEl = document.getElementById("price");
	const peopleEl = document.getElementById("people");
	const tipEl = document.getElementById("tip");
	const costEl = document.getElementById("cost");
	const errorEl = document.getElementById("error");

	if (peopleEl.value < 1) {
		sumUpEl = sumUpEl.style.display = "none";
		errorEl.style.display = "block";
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
		sumUpEl = sumUpEl.style.display = "none";
		errorEl.style.display = "block";
	}
});
