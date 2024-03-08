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
  //if no preventDefault, first console.log doesn't show and visibility returns to hidden
  // console.log("why wont this run?");
  // console.log(validateInput(pilot));



//does this need to be at start?
// pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
//     copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
//     fuelStatus.innerHTML = "Fuel level high enough for launch";
//     cargoStatus.innerHTML = "Cargo mass low enough for launch";
//     launchStatus.style.color = "green";
//     launchStatus.innerHTML = "Shuttle is Ready for Launch";

  if (
    validateInput(pilot.value) !== "Not a Number" ||
    validateInput(copilot.value) !== "Not a Number" ||
    validateInput(fuelLevel.value) !== "Is a Number" ||
    validateInput(cargoLevel.value) !== "Is a Number" ||
    Number(fuelLevel.value) < 10000 ||
    Number(cargoLevel.value) > 10000
  ) {
    if (validateInput(pilot.value) !== "Not a Number") {
      pilotStatus.innerHTML = `"Error: ${validateInput(pilot)}" is not ready`;
    } else {
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    }
    if (validateInput(copilot.value) !== "Not a Number") {
      copilotStatus.innerHTML = `"Error: ${validateInput(
        copilot
      )}" is not ready`;
    } else {
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    if (Number(fuelLevel) < 10000) {
      fuelStatus.innerHTML = "Fuel level too low for launch";
      // launchStatus.style.color = "red";
      // launchStatus.innerHTML = "Shuttle not ready for launch";
    } else {
      fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
    if (Number(cargoLevel) > 10000) {
      cargoStatus.innerHTML =
        "Cargo mass too heavy for launch";
    } else {
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    // alert("ALL forms must contain valid input");
    // event.preventDefault();
  } else {

  /*
  if (
    validateInput(pilot) !== "Not a Number" ||
    validateInput(copilot) !== "Not a Number" ||
    validateInput(fuelLevel) !== "Is a Number" ||
    validateInput(cargoLevel) !== "Is a Number"
  ) {
    // if statements inside for individual text changes
    if (validateInput(pilot) !== "Not a Number") {
      pilotStatus.innerHTML = `"Error: ${validateInput(pilot)}" is not ready`;
    }
    if (validateInput(copilot) !== "Not a Number") {
      copilotStatus.innerHTML = `"Error: ${validateInput(
        copilot
      )}" is not ready`;
    }

    alert("ALL forms must contain valid input");
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    event.preventDefault();
  } else if (Number(fuelLevel.value) < 10000) {
    fuelStatus.innerHTML = "Not enough fuel for the journey";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    event.preventDefault();
  } else if (Number(cargoLevel.value) > 10000) {
    cargoStatus.innerHTML =
      "there is too much mass for the shuttle to take off";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    event.preventDefault();
    
  }*/
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    // event.preventDefault();
  }

  // validate each individual input editing pilot and copilot list element
  // check if fuel level is high enough editing the fuel li
  // check if cargo mass is low enough editing the cargo li

  // modify list based off of results?
  //list style change to visible
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
