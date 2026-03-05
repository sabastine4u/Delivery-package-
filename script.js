console.log("from javascript file");


const packageWeight = document.getElementById("weight");
const destinationZone = document.getElementById("destination");
const isExpressDelivery = document.getElementById("checkbox");
const trigger = document.getElementById("btn");
const summaryText = document.getElementById("summaryText");

trigger.addEventListener("click", () => {
//  i gave the basecost a value of 2000
    let baseCost = 2000;

    let weight = Number(packageWeight.value);
    let destination = destinationZone.value;

    // Check destination
    if (destination == "ibadan") {
        baseCost += 5000;
    }

    if (destination == "lagos") {
        baseCost += 1000;
    }

    if (destination == "abeokuta") {
        baseCost += 3000;
    }

    // Check weight
    if (weight > 5) {
        baseCost += 1500;
    }

    // Express delivery bonus
    if (isExpressDelivery.checked) {
        baseCost = baseCost * 1.5;
    }

    const summary = 
        "The total shipping cost for your " +
        weight + "kg package to Zone " +
        destinationZone.value +
        " is N" +
        baseCost + ".";

    summaryText.textContent = summary;

     console.log(summary);
});