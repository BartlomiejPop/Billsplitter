const count = document.addEventListener("click", e => {

    sumUpEl = document.getElementById("sum-up");

    const priceEl = document.getElementById("price");
	const peopleEl = document.getElementById("people");
	const tipEl = document.getElementById("tip");
	const costEl = document.getElementById("cost");
   
    costEl.value = (+priceEl.value + (tipEl.value * +priceEl.value)) / +peopleEl.value
    
    costEl.textContent = costEl.value

    sumUpEl=sumUpEl.style.display="block"
})