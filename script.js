
//Write your JavaScript code here!
const { formSubmission, myFetch, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    //when this form submit is clicked ->>event
    //create listerner function for formSubmit

    let form = document.querySelector("form")
    let lauchStatus = document.getElementById("launchStatus");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoLevel = document.getElementById("cargoMass");

    form.addEventListener("submit", function (event) {
        let list = document.getElementById("faultyItems");
        let fuelLevel = document.getElementById("input[name=fuelLevel]");
        let cargoLevel = document.getElementById("input[name=cargoMass]");
        let pilot = document.getElementById("pilotName");
        let copilot = document.querySelector("input[name=copilotName]");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();

    })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })

});