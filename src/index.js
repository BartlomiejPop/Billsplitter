const priceEl = document.getElementById("price");
const peopleEl = document.getElementById("people");
const tipEl = document.getElementById("tip");
const costEl = document.getElementById("cost")

const count = document.addEventListener("click", e => {
    sumUpEl = document.getElementById("sum-up");
   

    costEl.value = (+priceEl.value + (tipEl.value * +priceEl.value)) / +peopleEl.value
    
    costEl.textContent = costEl.value
    console.log(sumUpEl.textContent);
    sumUpEl=sumUpEl.style.display="block"

})