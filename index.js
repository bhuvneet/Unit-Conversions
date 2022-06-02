let userInput = prompt("Enter a number: ");

function getNum() {
    document.getElementById("getNum").textContent = userInput;
}

function length() {
    // 1 metre = feet
    let feet = userInput * 3.28084;
    feet = feet.toFixed(3);

    // 1 foot = 0.3048 metres
    let metres = userInput * 0.3048;
    metres = metres.toFixed(3);

    let result1 = document.getElementById("length-feet");
    result1.textContent = userInput + " metres" + " = " + feet + " feet ";

    let result2 = document.getElementById("length-metres");
    result2.textContent = userInput + " feet" + " = " + metres + " metres ";
}

function volume() {
    // 1 litre = 0.264172 gallons
    let litre = userInput * 0.264172;
    litre = litre.toFixed(3);

    // 1 gallon = 3.78541 litres   
    let gallon = userInput * 3.78541;
    gallon = gallon.toFixed(3);

    let result1 = document.getElementById("volume-litres");
    result1.textContent = userInput + " gallons" + " = " + litre + " litres ";

    let result2 = document.getElementById("volume-gallons");
    result2.textContent = userInput + " litres" + " = " + gallon + " gallons ";
}

function mass() {
    // 1 kilo = 2.20462 pounds
    let pound = userInput * 2.20462;
    pound = pound.toFixed(3);

    // 1 pound = 0.453592 kilos 
    let kilo = userInput * 0.453592;
    kilo = kilo.toFixed(3);

    let result1 = document.getElementById("mass-kilos");
    result1.textContent = userInput + " pound" + " = " + kilo + " kilos ";

    let result2 = document.getElementById("mass-pounds");
    result2.textContent = userInput + " kilos" + " = " + pound + " gallons ";
}

getNum();
length();
volume();
mass();