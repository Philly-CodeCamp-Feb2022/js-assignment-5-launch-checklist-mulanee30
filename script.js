
//Write your JavaScript code here!
// const { formSubmission, myFetch, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })


    let form = document.querySelector("form")
    let list = document.getElementById("faultyItems");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);


    })

});

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;