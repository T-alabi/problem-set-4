/*
 * SOLUTION: Hello.
 */

/*declares the function */function hello() {
/*declares the varible "result" and correspodning message*/  let result = "Hello, AP Computer Science Principles!";
/*declares where the varible result will appear */  document.getElementById("output1").innerHTML = result;

  check("hello");
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() {
  let name = prompt("What is your name?"); /*declares the varible name and prpmpts user for an inputn
  that will be asingned to the varible*/

  let result = "Hello, " + name + "!"; /*declares varible result and attaches a message that will
  be displaid when the varible result is used*/
  document.getElementById("output2").innerHTML = result; /* varible result is used*/

  check("helloAgain", name);
}

/*
 * SOLUTION: Celsius.
 */

function celsius() {
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2));

  let fahr = cels * 9 / 5 + 32; /* decalres varible fhar and the math that os used to get fharenight*/
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit.";
  /*declres the result varible which is the final result of the problem. and sets it to a fixed
  decimal of 2*/
  document.getElementById("output3").innerHTML = result;/*displays the answer*/

  check("celsius", cels);
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() {
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2)); /*generates radom number*/

  let cels = (fahr - 32) * 5 / 9; /*math that converst the fhar. number to cels*/
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius.";
  /*changes the */
  document.getElementById("output4").innerHTML = result;

  check("fahrenheit", fahr);
}

/*
 * SOLUTION: Inches.
 */

function inches() {
  const MILE = 63360;/*declares varible mile and sets it to inches in a mile*/
  const YARD = 36; /*sets yard to inches in a yard*/
  const FOOT = 12; /*inches in a foot*/

  let input = -1; /*sets input into invalid value*/
  while (input < 0) {/*assures that the prompt will show*/
    input = Number(prompt("Enter a non-negative integer."));/*NUMBER allows only number inputs*/

    if (input === null) {/*if there is no input*/
      break;/*dont continue*/
    } else if (Number.isNaN(input)) {/*declares:else if input isn't a number */
      input = -1;/*sets input back to -1*/
    } else if (!Number.isInteger(input)) {/*declares: if input isnt an integer*/
      input = -1;/*sets input to -1*/
    }
  }

  if (input !== null) {/*if input isnt null*/
    let inches = input;/*inches is equal to input*/
    let miles = Math.floor(inches / MILE); /*varible miles = inches/ (miles in inches). no decimal fully rounded*/
    inches = inches % MILE; /*inches = remainder of inches/miles */
    let yards = Math.floor(inches / YARD);/*varible yards = inches/ (yards in inches). no decimal fully rounded */
    inches = inches % YARD;/*yards = remainder of inches / yards */
    let feet = Math.floor(inches / FOOT);/*let yards repeated */
    inches = inches % FOOT;/*inches repeated*/

    let result = "Miles: " + miles + "<br/>" +
                 "Yards: " + yards + "<br/>" +
                 "Feet: " + feet + "<br/>" +
                 "Inches: " + inches;/*declares varible result as full text of correct answer*/
    document.getElementById("output5").innerHTML = result;/*display varible result*/
  } else {
    document.getElementById("output5").innerHTML = "";/*else display nothing*/
  }

  check("inches", input);
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() {
  const KILOMETER = 100000;
  const METER = 100;

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let centimeters = input;
    let kilometers = Math.floor(centimeters / KILOMETER);
    centimeters = centimeters % KILOMETER;
    let meters = Math.floor(centimeters / METER);
    centimeters = centimeters % METER;

    let result = "Kilometers: " + kilometers + "<br/>" +
                 "Meters: " + meters + "<br/>" +
                 "Centimeters: " + centimeters;
    document.getElementById("output6").innerHTML = result;
  } else {
    document.getElementById("output6").innerHTML = "";
  }

  check("centimeters", input);
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() {
  const GALLON = 128;
  const QUART = 32;
  const PINT = 16;
  const CUP = 8;

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let fluidOunces = input;
    let gallons = Math.floor(fluidOunces / GALLON);
    fluidOunces = fluidOunces % GALLON;
    let quarts = Math.floor(fluidOunces / QUART);
    fluidOunces = fluidOunces % QUART;
    let pints = Math.floor(fluidOunces / PINT);
    fluidOunces = fluidOunces % PINT;
    let cups = Math.floor(fluidOunces / CUP);
    fluidOunces = fluidOunces % CUP;

    let result = "Gallons: " + gallons + "<br/>" +
                 "Quarts: " + quarts + "<br/>" +
                 "Pints: " + pints + "<br/>" +
                 "Cups: " + cups + "<br/>" +
                 "Fluid Ounces: " + fluidOunces;
    document.getElementById("output7").innerHTML = result;
  } else {
    document.getElementById("output7").innerHTML = "";
  }

  check("fluidOunces", input);
}

/*
 * SOLUTION: Ounces.
 */

function ounces() {
  const TON = 32000;
  const POUND = 16;

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let ounces = input;
    let tons = Math.floor(ounces / TON);
    ounces = ounces % TON;
    let pounds = Math.floor(ounces / POUND);
    ounces = ounces % POUND;

    let result = "Tons: " + tons + "<br/>" +
                 "Pounds: " + pounds + "<br/>" +
                 "Ounces: " + ounces;
    document.getElementById("output8").innerHTML = result;
  } else {
    document.getElementById("output8").innerHTML = "";
  }

  check("ounces", input);
}

/*
 * SOLUTION: Money.
 */

function money() {
  const DOLLAR = 100;
  const QUARTER = 25;
  const DIME = 10;
  const NICKEL = 5;

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let pennies = input;
    let dollars = Math.floor(pennies / DOLLAR);
    pennies = pennies % DOLLAR;
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

    let result = "Dollars: " + dollars + "<br/>" +
                 "Quarters: " + quarters + "<br/>" +
                 "Dimes: " + dimes + "<br/>" +
                 "Nickels: " + nickels + "<br/>" +
                 "Pennies: " + pennies;
    document.getElementById("output9").innerHTML = result;
  } else {
    document.getElementById("output9").innerHTML = "";
  }

  check("money", input);
}

/*
 * SOLUTION: Change.
 */

function change() {
  const QUARTER = 25;
  const DIME = 10;
  const NICKEL = 5;

  let input = -1;
  while (input < 0 || input >= 1) {
    input = Number(prompt("Enter a non-negative number less than 1.00."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let pennies = input;
    pennies = Number((pennies * 100.00).toFixed(0));
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

    let coins = quarters + dimes + nickels + pennies;
    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins.");
  } else {
    document.getElementById("output10").innerHTML = "";
  }

  check("change", input);
}
