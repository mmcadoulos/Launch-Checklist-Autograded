// Write your JavaScript code here!

// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  // let listedPlanets;
  // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  // let listedPlanetsResponse;
  // listedPlanetsResponse
  //   .then(function (result) {
  //     listedPlanets = result;
  //     console.log(listedPlanets);
  //   })
  //   .then(function () {
  //     console.log(listedPlanets);
  //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  //   });

  // task 2
  let form = this.document.querySelector("form");
  form.addEventListener("submit", () => {
    let pilot = this.document.querySelector("input[name=pilotName]");
    let copilot = this.document.querySelector("input[name=copilotName]");
    let fuelLevel = this.document.querySelector("input[name=fuelLevel]");
    let cargoLevel = this.document.querySelector("input[name=cargoMass]");
    let documentVar = this.document;
    let list = this.document.getElementById("faultyItems");
    if (
      validateInput(pilot.value) !== "Not a Number" ||
      validateInput(copilot.value) !== "Not a Number" ||
      validateInput(fuelLevel.value) !== "Is a Number" ||
      validateInput(cargoLevel.value) !== "Is a Number"
    ) {
      event.preventDefault();
      alert("all fields are required");
      launchStatus.style.color = "red";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else {
      formSubmission(documentVar, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
      this.event.preventDefault();
    }
  });
});
