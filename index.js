// FORK this starter file and save it to your own Repl.it account.
// STUDIOS: DATA AND VARIABLES
// Declare and initialize the 12 variables here:
//
const input = require('readline-sync');
let astronautCount = input.question("How many astronauts?");

let kg = " kg";
let date = "Monday 2019-3-18";
let time = "10:05:04 AM"+ "\n";
let astronautStatus = "ready"+ "\n";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 76000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg  + "\n";
let fuelTempCelsius = -225 + " C";
let fuelLevel = 100+ "\n";
let weatherStatus = "clear"+ "\n";
let dashedLine = "-------------------------------------";
let clearForTakeOff = 

astronautCount = parseInt(input.question);
//
// Write code to generate the LC04 report here:

console.log(typeof astronautCount);

console.log(dashedLine);
console.log("> LC04 - LAUNCH CHECKLIST");  
console.log(dashedLine); 
console.log("Date: " + date);
console.log("Time: " + time);

console.log(dashedLine);
console.log("> ASTRONAUT INFO");
console.log(dashedLine);  
console.log("* Count: " + astronautCount);
console.log("* Status: " + astronautStatus);

console.log(dashedLine);
console.log("> FUEL DATA");
console.log(dashedLine);
console.log("Fuel Temp: "+ fuelTempCelsius);
console.log("Total Mass: " + totalMassKg + kg);

console.log(dashedLine);
console.log("> MASS DATA");
console.log(dashedLine);
console.log("* Crew Mass: " + crewMassKg + kg);
console.log("* Fuel Mass: " + fuelMassKg + kg);
console.log("* Total Mass: " + totalMassKg + kg);

console.log(dashedLine);
console.log("> FLIGHT PLAN");
console.log("* Weather: " + weatherStatus);
console.log(dashedLine);

console.log("> OVERALL STATUS");
console.log(dashedLine);
console.log("* Clear for takeoff: " + "YES");

// When done, have your TA check your code.


//MC: I couldnt figure out how to do takeoff status

// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.

//"
