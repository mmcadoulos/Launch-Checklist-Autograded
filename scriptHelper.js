// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else if (typeof Number(testInput) === "number") {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  
  list.style.visibility = "visible";
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  fuelStatus.innerHTML = "Fuel level high enough for launch";
  cargoStatus.innerHTML = "Cargo mass low enough for launch";
  launchStatus.style.color = "green";
  launchStatus.innerHTML = "Shuttle is Ready for Launch";

  if (validateInput(pilot) !== "Not a Number") {
    pilotStatus.innerHTML = `"Error: ${validateInput(pilot)}" is not ready`;
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
  }
  if (validateInput(copilot) !== "Not a Number") {
    copilotStatus.innerHTML = `"Error: ${validateInput(copilot)}" is not ready`;
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
  }
  if (Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
  }
  if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {
  let planet = {};
  //math random to find a planet
  return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
