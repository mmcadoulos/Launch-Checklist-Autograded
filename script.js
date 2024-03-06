// Write your JavaScript code here!

const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let form = this.document.querySelector("form");
  form.addEventListener("submit", () => {
    // let pilot = this.document.querySelector("input[name=pilotName]");
    // let copilot = this.document.querySelector("input[name=copilotName]");
    // let fuelLevel = this.document.querySelector("input[name=fuelLevel]");
    // let cargoLevel = this.document.querySelector("input[name=cargoMass]");
    // let documentVar = "";
    // let list ="";
    // if (!formSubmission(documentVar, list, pilot, copilot, fuelLevel, cargoLevel)){
    //   this.alert("ALL forms must contain valid input");
    // };
    alert("Submitted");
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
