// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget")
    // Here is the HTML formatting for our mission target div
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json.name}</li>
                     <li>Diameter: ${json.diameter}</li>
                     <li>Star: ${json.star}</li>
                     <li>Distance from Earth: ${json.distance}</li>
                     <li>Number of Moons: ${json.moons}</li>
                 </ol>
                 <img src="${json.image}">`
};


function validateInput(testInput) {
    if (testInput === "") {
        return ("Empty");
    };

    if (isNaN(testInput)) {
        return ("Not a Number");
    } else {
        return ("Is a Number");
    };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    //alert 
    //pilot.value >>is valid??
    //copilot value >>is valid?
    //if any field empty >>add alert!
    //need to call validateInput functionI

    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
        alert("All fields required");
    } else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
        alert("Input CANNOT be a number")
    } else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
        alert("Input MUST be a number")
    } else {

        if (Number(fuelLevel.value) < 10000) {
            list.style.visibility = "visible"
            fuelStatus.innerHTML = "Not enough fuel for journey"
            lauchStatus.innerHTML = "Shuttle not ready for launch"
            lauchStatus.style.color = "red"
        };

        if (Number(cargoLevel.value) > 10000) {
            list.style.visibility = "visible"
            cargoStatus.innerHTML = "Too much mass for shuttle takeoff"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            lauchStatus.style.color = "red"
        };

        if (Number(fuelLevel.value > 10000 && cargoLevel.value < 10000)) {
            launchStatus.innerHTML = "Shuttle is ready for launch"
            lauchStatus.style.color = "green"
        };

        pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`

        copilotStatus.innerHTML = `Co-Pilot ${copilot.value} Ready`
    }

};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()

    })

    return planetsReturned;
};


function pickPlanet(planets) {
    return planets[Math.round(Math.random() * planets.length)]
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
