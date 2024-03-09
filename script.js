// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { myFetch, pickPlanet } = require("./scriptHelper");

// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let documentVar = this.document;

  let listedPlanets;
  let selectPlanet;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      selectPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        documentVar,
        selectPlanet["name"],
        selectPlanet["diameter"],
        selectPlanet["star"],
        selectPlanet["distance"],
        selectPlanet["moon"],
        selectPlanet["image"]
      );
    });

  // task 2
  let form = this.document.querySelector("form");
  form.addEventListener("submit", () => {
    let pilot = this.document.querySelector("input[name=pilotName]");
    let copilot = this.document.querySelector("input[name=copilotName]");
    let fuelLevel = this.document.querySelector("input[name=fuelLevel]");
    let cargoLevel = this.document.querySelector("input[name=cargoMass]");
    let list = this.document.getElementById("faultyItems");
    if (
      validateInput(pilot.value) === "Empty" ||
      validateInput(copilot.value) === "Empty" ||
      validateInput(fuelLevel.value) === "Empty" ||
      validateInput(cargoLevel.value) === "Empty"
    ) {
      launchStatus.style.color = "black";
      launchStatus.innerHTML = "Awaiting Information Before Launch";
      list.style.visibility = "hidden";
      event.preventDefault();
      alert("All fields are required!");
    } else if (
      validateInput(pilot.value) !== "Not a Number" ||
      validateInput(copilot.value) !== "Not a Number" ||
      validateInput(fuelLevel.value) !== "Is a Number" ||
      validateInput(cargoLevel.value) !== "Is a Number"
    ) {
      launchStatus.style.color = "black";
      launchStatus.innerHTML = "Awaiting Information Before Launch";
      list.style.visibility = "hidden";
      event.preventDefault();
      alert("Make sure to enter valid information in each field!");
    } else {
      formSubmission(
        documentVar,
        list,
        pilot.value,
        copilot.value,
        fuelLevel.value,
        cargoLevel.value
      );
      this.event.preventDefault();
    }
  });
});
